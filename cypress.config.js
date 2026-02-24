const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: false, // Geramos apenas o JSON primeiro
      json: true,
      timestamp: 'mmddyyyy_HHMMss',
    },
  },
});
