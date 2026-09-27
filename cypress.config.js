const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'pb7vcu',
  e2e: {
    baseUrl: "https://5elementslearning.dev/demosite/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});