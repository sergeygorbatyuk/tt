import {BasePage} from './base.page'
import {HeaderFragment} from './fragments/idnex'

class MainPage extends BasePage {
  public header: HeaderFragment

  constructor() {
    super()
    this.header = new HeaderFragment()
  }
}

export {MainPage}
