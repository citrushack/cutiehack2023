const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3010",
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {},
  },
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
