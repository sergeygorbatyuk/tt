import {MainPage} from './main.page';
import {LoginPage} from './login.page'
import {MainLoginPage} from './main.login.page'

export const pageProvider = {
  mainPage: new MainPage(),
  loginPage: new LoginPage(),
  mainLoginPage: new MainLoginPage()
}