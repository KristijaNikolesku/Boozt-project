const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.boozt.com/dk/da/',
    chromeWebSecurity: false,
  }
});
