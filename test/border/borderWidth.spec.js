const main = require('../../src/scripts/main.js')
const config = require('./borderWidth.spec.json')

const testConfig = config.tests[0]
const url = config.urls[0];

const expected = {
  url: url,
  test: testConfig,
  elementsCount: 4,
  totalPassedTests: 12,
  totalFailedTests: 4,
  failedTests: [{
    "identifier": "<p id=\"width-fail\">width-fail</p>",
    "results": [{
      "property": "borderTopWidth",
      "saw": "10px"
    },{
      "property": "borderRightWidth",
      "saw": "10px"
    },{
      "property": "borderBottomWidth",
      "saw": "10px"
    },{
      "property": "borderLeftWidth",
      "saw": "10px"
    }]
  }]
}

describe('border width tests', () => {
  test('fails when incorrect border width is used', async () => {
    await main.pixelpolice(url, testConfig, true).then(result => {
      expect(result).toStrictEqual(expected)
    })
  })
})
