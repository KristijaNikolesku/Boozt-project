const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    baseUrl:'https://boozt.com',
    //chromeWebSecurity: false,
    },
 
});
