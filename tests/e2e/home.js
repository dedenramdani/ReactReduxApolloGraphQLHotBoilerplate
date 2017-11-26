const clientHelper = require('../helpers/client')
const assertHelper = require('../helpers/assert')
const selectors = require('../selectors')


module.exports = {
  client: null,

  beforeEach: (browser, done) => {
    this.client = clientHelper(browser)
    this.assert = assertHelper(browser)
    done()
  },

  'Required elements exist': () => {
    this.client.goToPage('/')
    this.assert.containsText(selectors.home.header, 'React Redux Apollo GraphQL Hot Boilerplate 2.0')
    this.client.waitForElementVisible(selectors.home.dummyImg)
    this.client.end()
  },
}
