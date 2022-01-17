/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars


const cucumber = require('cypress-cucumber-preprocessor').default
var reporter = require('cucumber-html-reporter');
const dotenvPlugin = require('cypress-dotenv');

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())

  config = dotenvPlugin(config)
  return config
}

var options = {
  theme: 'bootstrap', //more options: bootstrap, hierarchy, foundation and simple
  jsonFile: 'cypress/test-results/cucumber-json',
  output: 'cypress/test-results/html/report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  metadata: {
      "App Version":"0.3.2",
      "Test Environment": "STAGING",
      "Browser": "Chrome  54.0.2840.98",
      "Platform": "Windows 1",
      "Parallel": "Scenarios",
      "Executed": "Remote"
  }
  //to generate consodilated report from multi-cucumber JSON files, please use `jsonDir` option instead of `jsonFile`.
  //More info is available in `options` section below.
};

reporter.generate(options);


//Environment
//config.env.base_url = process.env.BASE_URL;
