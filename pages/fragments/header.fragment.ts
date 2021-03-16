import {ElementFinder, $} from 'protractor'
import {BasePage} from '../base.page'

class HeaderFragment extends BasePage {
  public signIn: ElementFinder
  public header: ElementFinder
  public signOff: ElementFinder

  constructor() {
    super()
    this.signIn = $('a#LoginLink')
    this.header = $('div#header')
    this.signOff = $('a[href="/logout.jsp"]')
  }
}

export {HeaderFragment}
