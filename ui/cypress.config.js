const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
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
