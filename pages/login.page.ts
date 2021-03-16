import {ElementFinder, $} from 'protractor'
import {BasePage} from './base.page'

class LoginPage extends BasePage {
  public username: ElementFinder
  public password: ElementFinder
  public loginButton: ElementFinder

  constructor() {
    super();
    this.username = $('input#uid')
    this.password = $('input#passw')
    this.loginButton = $('input[name="btnSubmit"]')
  }
}

export {LoginPage}
