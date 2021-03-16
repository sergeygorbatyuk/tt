import {ElementFinder, $} from 'protractor'
import {BasePage} from './base.page'
import {HeaderFragment} from './fragments/idnex'

class MainLoginPage extends BasePage {
  public listAccounts: ElementFinder
  public header: HeaderFragment

  constructor() {
    super()
    this.listAccounts = $('select#listAccounts')
    this.header = new HeaderFragment()
  }
}

export {MainLoginPage}
