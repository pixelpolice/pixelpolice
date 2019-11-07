const main = require('../../src/scripts/main.js')
const config = require('./pseudo.spec.json')

const testConfig = config.tests[0]
const url = config.urls[0]

const expected = {
  url: url,
  test: testConfig,
  elementsCount: 9,
  totalPassedTests: 7,
  totalFailedTests: 2,
  failedTests: [{
    "identifier": "::before <p id=\"pseudo-before-fail\">pseudo-before-fail</p>",
    "results": [{
      "property": "color",
      "saw": "rgb(255, 0, 0)",
    }]
  },{
    "identifier": "::after <p id=\"pseudo-after-fail\">pseudo-after-fail</p>",
    "results": [{
      "property": "color",
      "saw": "rgb(255, 0, 0)",
    }]
  }]
}

describe('pseudo element tests', () => {
  test('fails when incorrect colors used on psdeuo elements', async () => {
    await main.pixelpolice(url, testConfig, true).then(result => {
      expect(result).toStrictEqual(expected)
    })
  })
})
