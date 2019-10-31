const main = require('../../scripts/main.js')
const config = require('./margin.spec.json')

const testConfig = config.tests[0]
const url = config.urls[0];

const expected = {
  url: url,
  config: testConfig,
  elementsCount: 9,
  totalPassedTests: 32,
  totalFailedTests: 4,
  failedTests: [{
    "identifier": "<p id=\"px-margin-top-fail\">px-margin-top-fail</p>",
    "results": [{
      "property": "marginTop",
      "saw": "123px"
    }]
  },{
    "identifier": "<p id=\"px-margin-right-fail\">px-margin-right-fail</p>",
    "results": [{
      "property": "marginRight",
      "saw": "123px"
    }]
  },{
    "identifier": "<p id=\"px-margin-bottom-fail\">px-margin-bottom-fail</p>",
    "results": [{
      "property": "marginBottom",
      "saw": "123px"
    }]
  },{
    "identifier": "<p id=\"px-margin-left-fail\">px-margin-left-fail</p>",
    "results": [{
      "property": "marginLeft",
      "saw": "123px"
    }]
  }]
}

describe('margin tests', () => {
  test('fails when incorrect margins used', async () => {
    await main.pixelpolice(url, testConfig, true).then(result => {
      expect(result).toStrictEqual(expected)
    })
  })
})
