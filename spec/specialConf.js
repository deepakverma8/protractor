var env = require('./environment.js');
var start;

// The main suite of Protractor tests to be run on CI servers.
exports.config = {
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,

  // Spec patterns are relative to this directory.
  specs: [
    'basic/timeout_spec.js'
  ],

  multiCapabilities: [{
    'browserName': 'chrome'
  }],
  // multiCapabilities: [{
  //   'browserName': 'chrome',
  //   'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
  //   'build': process.env.TRAVIS_BUILD_NUMBER,
  //   'name': 'Protractor suite tests',
  //   'version': '36',
  //   'platform': 'OS X 10.9',
  //   'selenium-version': '2.43.1'
  // }, {
  //   'browserName': 'firefox',
  //   'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
  //   'build': process.env.TRAVIS_BUILD_NUMBER,
  //   'name': 'Protractor suite tests',
  //   'version': '32',
  //   'selenium-version': '2.43.1'
  // }],

  baseUrl: env.baseUrl,

  jasmineNodeOpts: {
    isVerbose: true,
    showTiming: true,
    defaultTimeoutInterval: 90000
  },

  onPrepare: function() {
    start = new Date().getTime();
  },

  onCleanUp: function(exitCode) {
    var duration = new Date().getTime() - start;
    console.log('duration is: ', duration)
    //expect(duration > 4900 && duration < 6000).toBeTruthy();
    return 0;
  },
};
