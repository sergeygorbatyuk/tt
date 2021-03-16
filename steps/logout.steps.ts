import {When, Then, Given} from 'cucumber'
import {browser} from 'protractor'
import {expect} from 'chai'
import {pageProvider} from '../pages'
import {logout} from '../helpers/common'
const {mainPage, mainLoginPage} = pageProvider

Given(/^Sign off button is visible/, async () => {
  const signOffButtonIsDisplayed = await mainLoginPage.header.isDisplayed({signOff: null});
  expect(signOffButtonIsDisplayed, 'Sign off button is not visible/').to.be.true
})

When(/^I do Logout/, async () => {
  await logout()
});

Then(/^I am on the main page/, async () => {
  const currentUrl = await browser.getCurrentUrl()
  const signInButtonIsDisplayed = await mainPage.header.isDisplayed({signIn: null});
  expect(currentUrl).to.equal('http://demo.testfire.net/index.jsp')
  expect(signInButtonIsDisplayed, 'Sign off button is not visible/').to.be.true
});
