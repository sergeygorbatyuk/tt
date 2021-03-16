import {pageProvider} from '../pages';
const {mainPage, loginPage, mainLoginPage} = pageProvider

export async function login(login) {
  await mainPage.header.click({signIn: null})
  await loginPage.sendKeys(login)
  await loginPage.click({loginButton: null})
}

export async function logout() {
  await mainLoginPage.header.click({signOff: null})
}