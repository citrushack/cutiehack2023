const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3010",
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {},
  },
  env: {
    NODE_ENV: "dev",
  },
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
