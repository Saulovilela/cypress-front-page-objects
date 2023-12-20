const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    baseUrl: "https://www.saucedemo.com/v1",
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
        on("file:preprocessor", cucumber());
    },
  },
});