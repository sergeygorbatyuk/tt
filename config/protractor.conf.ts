import {browser, Config} from "protractor"

export const config: Config = {
  directConnect: true,
  // seleniumAddress: "http://127.0.0.1:4444/wd/hub",

  SELENIUM_PROMISE_MANAGER: false,
  allScriptsTimeout: 300000,

  capabilities: {
    browserName: "chrome",
  },

  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),

  specs: [
      "./features/*.feature",
  ],
  onPrepare: () => {
    browser.ignoreSynchronization = true
    browser.manage().window().maximize()
  },
  cucumberOpts: {
    require: ['./steps/*.steps.ts'],
    tags: false,
    profile: false,
    'no-source': true
  },
}