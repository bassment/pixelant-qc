var findFromString = require('../utils/findJobID');
var fs = require('fs');
var exec = require('child_process').exec;
var router = require('express').Router();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.PERSONAL_GMAIL,
      pass: process.env.GMAIL_PASS
    }
  });

var nightwatchMailOptions = {
  from: 'Anton Perebyinis <anton.perebyinis@gmail.com>',
  to: 'anton.perebyinis@pixelant.se',
  subject: 'Nightwatch Tests',
  html: '<a href="http://pixelant.space/reports/nightwatch/report.html">' +
        'Your Functional Tests</a>'
};

var galenMailOptions = {
  from: 'Anton Perebyinis <anton.perebyinis@gmail.com>',
  to: 'anton.perebyinis@pixelant.se',
  subject: 'Galen Tests',
  html: '<a href="http://pixelant.space/reports/galen/report.html">' +
        'Your Layout Tests</a>'
};

router.use(require('body-parser').json());

router.post('/api/test', function(req, res) {
  var data = req.body.data;
  console.log(data);

  galenMailOptions.to = data.email;
  nightwatchMailOptions.to = data.email;

  var galen = 'galen test saucelabs-configuration.test ' +
              '--htmlreport /home/codterpin/automate/public/reports/galen ' +
              '--parallel-tests 8 ';

  var nightwatch = 'nightwatch ' +
                  '-c nightwatch-saucelabs.json ' +
                  '--reporter ./scripts/html-saucelabs-reporter.js ';

  switch (data.type) {
    case 'functional': {
      galen = null;
      break;
    }
    case 'layout': {
      nightwatch = null;
      break;
    }
    default: {
      break;
    }
  }

  if (galen && !nightwatch) {
    if (data.section === 'top header' && data.browser === 'chrome') {
      galen += '--groups logo-section-chrome';
    } else if (data.section === 'meta menu' && data.browser === 'chrome') {
      galen += '--groups meta-menu-chrome';
    } else if (data.section === 'top header' && data.browser === 'firefox') {
      galen += '--groups logo-section-firefox';
    } else if (data.section === 'meta menu' && data.browser === 'firefox') {
      galen += '--groups meta-menu-firefox';
    } else if (data.section === 'meta menu' && data.browser === 'both') {
      galen += '--groups meta-menu-desktop';
    } else if (data.section === 'top header' && data.browser === 'both') {
      galen += '--groups logo-section-desktop';
    }
  } else if (nightwatch && !galen) {
    if (data.section === 'top header' && data.browser === 'chrome') {
      nightwatch += '-t tests/Home/socialLinks.js -e default,mchrome';
    } else if (data.section === 'meta menu' && data.browser === 'chrome') {
      nightwatch += '-t tests/Home/metaMenuLinks.js -e default,mchrome';
    } else if (data.section === 'top header' && data.browser === 'firefox') {
      nightwatch += '-t tests/Home/socialLinks.js -e mfirefox,wfirefox';
    } else if (data.section === 'meta menu' && data.browser === 'firefox') {
      nightwatch += '-t tests/Home/metaMenuLinks.js -e mfirefox,wfirefox';
    } else if (data.section === 'meta menu' && data.browser === 'both') {
      nightwatch += '-t tests/Home/metaMenuLinks.js -e default,mchrome,mfirefox,wfirefox';
    } else if (data.section === 'top header' && data.browser === 'both') {
      nightwatch += '-t tests/Home/socialLinks.js -e default,mchrome,mfirefox,wfirefox';
    }
  } else if (nightwatch && galen) {
    if (data.section === 'top header' && data.browser === 'chrome') {
      galen += '--groups logo-section-chrome';
      nightwatch += '-t tests/Home/socialLinks.js -e default,mchrome';
    } else if (data.section === 'meta menu' && data.browser === 'chrome') {
      galen += '--groups meta-menu-chrome';
      nightwatch += '-t tests/Home/metaMenuLinks.js -e default,mchrome';
    } else if (data.section === 'top header' && data.browser === 'firefox') {
      galen += '--groups logo-section-firefox';
      nightwatch += '-t tests/Home/socialLinks.js -e mfirefox,wfirefox';
    } else if (data.section === 'meta menu' && data.browser === 'firefox') {
      galen += '--groups meta-menu-firefox';
      nightwatch += '-t tests/Home/metaMenuLinks.js -e mfirefox,wfirefox';
    } else if (data.section === 'meta menu' && data.browser === 'both') {
      galen += '--groups meta-menu-desktop';
      nightwatch += '-t tests/Home/metaMenuLinks.js -e default,mchrome,mfirefox,wfirefox';
    } else if (data.section === 'top header' && data.browser === 'both') {
      galen += '--groups logo-section-desktop';
      nightwatch += '-t tests/Home/socialLinks.js -e default,mchrome,mfirefox,wfirefox';
    }
  }

  if (nightwatch) {
    console.log(nightwatch);

    exec('rm -rf /home/codterpin/automate/public/reports/nightwatch/*');
    process.chdir('/home/codterpin/t3kit/Nightwatch');

    exec(nightwatch, function(error, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);

      var html = fs.readFileSync('/home/codterpin/automate/public/reports/nightwatch/report.html', 'utf8');

      nightwatchMailOptions.html = '<p><a href="http://pixelant.space/reports/nightwatch/report.html">' +
            'Your Functional Tests</a></p>' +
            '<p><a href="' + 'https://saucelabs.com/beta/tests/' + findFromString.findJobID(html) + '">' +
                  'Check Your test in Saucelabs Dashboard</a></p>'

      if (error !== null) console.log('exec error: ' + error);
      transporter.sendMail(nightwatchMailOptions, function(error, info) {
        if (error) {
          return console.log(error);
        }
        console.log('Message sent: ' + info.response);
      });
    });
  }

  if (galen) {
    console.log(galen);

    exec('rm -rf /home/codterpin/automate/public/reports/galen/*');
    process.chdir('/home/codterpin/t3kit/Galen');

    exec(galen, function(error, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);

      if (error !== null) console.log('exec error: ' + error);
      transporter.sendMail(galenMailOptions, function(error, info) {
        if (error) {
          return console.log(error);
        }
        console.log('Message sent: ' + info.response);
      });
    });
  }

  res.json({nightwatch, galen});
});

module.exports = router;
