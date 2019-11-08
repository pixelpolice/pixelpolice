const main = require('../../src/scripts/main.js')
const config = require('./borderStyle.spec.json')

const testConfig = config.tests[0]
const url = config.urls[0];

const expected = {
  url: url,
  test: testConfig,
  elementsCount: 4,
  totalPassedTests: 12,
  totalFailedTests: 4,
  failedTests: [{
    "identifier": "<p id=\"style-fail\">style-fail</p>",
    "results": [{
      "property": "borderTopStyle",
      "saw": "dotted"
    },{
      "property": "borderRightStyle",
      "saw": "dotted"
    },{
      "property": "borderBottomStyle",
      "saw": "dotted"
    },{
      "property": "borderLeftStyle",
      "saw": "dotted"
    }]
  }]
}

describe('border style tests', () => {
  test('fails when incorrect border styles used', async () => {
    await main.pixelpolice(url, testConfig, true).then(result => {
      expect(result).toStrictEqual(expected)
    })
  })
})
