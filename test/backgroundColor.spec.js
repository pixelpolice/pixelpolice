const main = require('../src/scripts/main.js')
const config = require('./backgroundColor.spec.json')

const testConfig = config.tests[0]
const url = config.urls[0];

const expected = {
  url: url,
  test: testConfig,
  elementsCount: 9,
  totalPassedTests: 5,
  totalFailedTests: 4,
  failedTests: [{
    "identifier": "<p id=\"hex-fail\">hex-fail</p>",
    "results": [{
      "property": "backgroundColor",
      "saw": "rgb(18, 52, 86)"
    }]
  },{
    "identifier": "<p id=\"rgb-fail\">rgb-fail</p>",
    "results": [{
      "property": "backgroundColor",
      "saw": "rgb(12, 34, 56)"
    }]
  },{
    "identifier": "<p id=\"rgba-fail\">rgba-fail</p>",
    "results": [{
      "property": "backgroundColor",
      "saw": "rgba(12, 34, 56, 0.78)"
    }]
  },{
    "identifier": "<p id=\"color-name-fail\">color-name-fail</p>",
    "results": [{
      "property": "backgroundColor",
      "saw": "rgb(128, 0, 128)"
    }]
  }]
}

describe('background color tests', () => {
  test('fails when incorrect background colors used', async () => {
    await main.pixelpolice(url, testConfig, true).then(result => {
      expect(result).toStrictEqual(expected)
    })
  })
})
