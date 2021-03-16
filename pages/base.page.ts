import {ExpectedConditions as EC, browser} from 'protractor'

class BasePage {
  async sendKeys(data) {
    await Object.entries(data).reduce(
      (acc, [key, value]) => acc.then(async () => {
        await browser.wait(EC.visibilityOf(this[key]), 5000)
        await this[key].sendKeys(value)
      }),
      Promise.resolve(),
    );
  }

  async click(elements) {
    await Object.entries(elements).reduce(
      (acc, [key]) =>
        acc.then(async () => {
          await browser.wait(EC.visibilityOf(this[key]), 5000)
          await this[key].click();
        }),
      Promise.resolve(),
    );
  }

  async isDisplayed(elements) {
    let res = Object.entries(elements).reduce(
      (acc, [key]) =>
        acc.then(async () => {
          await browser.wait(EC.visibilityOf(this[key]), 5000)
          return this[key].isDisplayed()
        }),
      Promise.resolve(),
    );
    return res
  }
}

export {BasePage}