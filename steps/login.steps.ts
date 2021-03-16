import {When, Then, Given} from 'cucumber'
import {browser} from 'protractor'
import {expect} from 'chai'
import {pageProvider} from '../pages'
import {credentials} from '../test-data/data'
import {login} from '../helpers/common'
const {mainPage, mainLoginPage} = pageProvider

Given(/^I go to "([^"]*)"$/, async (url) => {
  await browser.get(url)
  const mainPageIsDisplayed = await mainPage.header.isDisplayed({header: null});
  expect(mainPageIsDisplayed, 'Main page header is not displayed').to.be.true
})

When(/^I do login as "(.*?)"$/, {timeout: 10 * 5000}, async (text) => {
  const creds = credentials[text];
  await login(creds)
});

Then(/^I logged in and verify that 2 accounts are present/, async () => {
  const listAccountsIsDisplayed = await mainLoginPage.isDisplayed({listAccounts: null}) as any
  expect(listAccountsIsDisplayed, 'List accounts should be visible, login is successfull').to.be.true
  const options = await mainLoginPage.listAccounts.$$('option').getAttribute('value');
  expect(options.length).to.equal(2, 'Two accounts should be present')
});
