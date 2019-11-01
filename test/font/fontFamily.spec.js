const main = require('../../scripts/main.js')
const config = require('./fontFamily.spec.json')

const testConfig = config.tests[0]
const url = config.urls[0];

const expected = {
  url: url,
  test: testConfig,
  elementsCount: 2,
  totalPassedTests: 1,
  totalFailedTests: 1,
  failedTests: [{
    "identifier": "<p id=\"font-family-fail\">font-family-fail</p>",
    "results": [{
      "property": "fontFamily",
      "saw": "\"Not a font\""
    }]
  }]
}

describe('font tests', () => {
  test('fails when incorrect font family used', async () => {
    await main.pixelpolice(url,testConfig, true).then(result => {
      expect(result).toStrictEqual(expected)
    })
  })
})
