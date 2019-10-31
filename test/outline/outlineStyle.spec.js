const main = require('../../scripts/main.js')
const messages = require('../../scripts/messages.js')
const config = require('./outlineStyle.spec.json')

const testConfig = config.tests[0]
const url = config.urls[0];

const expected = {
  url: url,
  config: testConfig,
  elementsCount: 3,
  totalPassedTests: 2,
  totalFailedTests: 1,
  failedTests: [{
    "identifier": "<p id=\"outline-style-fail\">outline-style-fail</p>",
    "results": [{
      "property": "outlineStyle",
      "saw": "dashed"
    }]
  }]
}

describe('outline style tests', () => {
  test('fails when incorrect outline styles used', async () => {
    await main.pixelpolice(url, testConfig, true).then(result => {
      expect(result).toStrictEqual(expected)
    })
  })
})
