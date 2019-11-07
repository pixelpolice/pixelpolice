const main = require('../../src/scripts/main.js')
const config = require('./fontSize.spec.json')

const testConfig = config.tests[0]
const url = config.urls[0];

const expected = {
  url: url,
  test: testConfig,
  elementsCount: 2,
  totalPassedTests: 1,
  totalFailedTests: 1,
  failedTests: [{
    "identifier": "<p id=\"font-size-fail\">font-size-fail</p>",
    "results": [{
      "property": "fontSize",
      "saw": "48px"
    }]
  }]
}

describe('font tests', () => {
  test('fails when incorrect font size used', async () => {
    await main.pixelpolice(url, testConfig, true).then(result => {
      expect(result).toStrictEqual(expected)
    })
  })
})
