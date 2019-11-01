const main = require('../../scripts/main.js')
const config = require('./fontWeight.spec.json')

const testConfig = config.tests[0]
const url = config.urls[0];

const expected = {
  url: url,
  test: testConfig,
  elementsCount: 2,
  totalPassedTests: 1,
  totalFailedTests: 1,
  failedTests: [{
    "identifier": "<p id=\"font-weight-fail\">font-weight-fail</p>",
    "results": [{
      "property": "fontWeight",
      "saw": "700"
    }]
  }]
}

describe('font tests', () => {
  test('fails when incorrect font weight used', async () => {
    await main.pixelpolice(url, testConfig, true).then(result => {
      expect(result).toStrictEqual(expected)
    })
  })
})
