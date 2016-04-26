# pixelant-qc
_Project to simplify automated testing processes using React and Alt(signIn and signUp logic included)_ using:

**Node, Express, React, Alt, ES6, ES7, React-Router**

**Webpack, HotModuleReplacement, Firebase, React-Login, Google oAuth**

**Skeleton, Css Modules, Deploy (webpack production version)**

I created this project to simplify the run of automated tests.
This project is working well with this repository:
https://github.com/PixelantQC/t3kit

__You need to set several environment variables to be able to run tests on SauceLabs__
__and to send reports via gmail__

**You need to set such environment variables:**:
FIREBASE_URL - I use Firebase as a database for this project, so setup your firebase link
ALSO you should change firebase url in SocialAuthActions.js file
SAUCE_USER, SAUCE_KEY - to run the tests on SauceLabs
PERSONAL_GMAIL, GMAIL_PASS - to send the messages from your personal gmail

To run this project, clone it:

git clone {this repo link}

Then in the root folder of the project run:

npm install

npm start

To run production version of the project run:

npm run build

npm run production
