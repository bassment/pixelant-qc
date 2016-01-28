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
  html: '<a href="http://localhost:3000/reports/nightwatch/report.html">' +
        'Click </a>on Your Function tests ;)'
};

var galenMailOptions = {
  from: 'Anton Perebyinis <anton.perebyinis@gmail.com>',
  to: 'anton.perebyinis@pixelant.se',
  subject: 'Galen Tests',
  html: '<a href="http://localhost:3000/reports/galen/report.html">' +
        'Click </a>on Your Layout tests ;)'
};

router.use(require('body-parser').json());

router.post('/api/test', function(req, res) {
  var data = req.body.data

  var galen = 'galen test saucelabs-configuration.test ' +
              '--htmlreport /Users/admin/React/automate/public/reports/galen ' +
              '--groups home-desktop --parallel-tests 8 ';

  var nightwatch = 'nightwatch -t tests/Home/search.js -e default,mchrome ' +
                  '-c nightwatch-saucelabs.json ' +
                  '--reporter ./scripts/html-saucelabs-reporter.js';

  switch (req.body.data) {
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

  if (nightwatch) {
    console.log(nightwatch);

    exec('rm -rf /Users/admin/React/automate/public/reports/nightwatch/*');
    process.chdir('/Users/admin/Tests/project-template/Nightwatch');

    exec(nightwatch, function(error, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);

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

    exec('rm -rf /Users/admin/React/automate/public/reports/galen/*');
    process.chdir('/Users/admin/Tests/project-template/Galen');

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
