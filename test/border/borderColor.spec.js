const main = require('../../scripts/main.js')
const messages = require('../../scripts/messages.js')
const config = require('./borderColor.spec.json')

const testConfig = config.tests[0]
const url = config.urls[0];

const expected = {
  url: url,
  config: testConfig,
  elementsCount: 8,
  totalPassedTests: 16,
  totalFailedTests: 16,
  failedTests: [{
    "identifier": "<p id=\"hex-fail\">hex-fail</p>",
    "results": [{
      "property": "borderTopColor",
      "saw": "rgb(18, 52, 86)"
    },{
      "property": "borderRightColor",
      "saw": "rgb(18, 52, 86)"
    },{
      "property": "borderBottomColor",
      "saw": "rgb(18, 52, 86)"
    },{
      "property": "borderLeftColor",
      "saw": "rgb(18, 52, 86)"
    }]
  },{
    "identifier": "<p id=\"rgb-fail\">rgb-fail</p>",
    "results": [{
      "property": "borderTopColor",
      "saw": "rgb(12, 34, 56)"
    },{
      "property": "borderRightColor",
      "saw": "rgb(12, 34, 56)"
    },{
      "property": "borderBottomColor",
      "saw": "rgb(12, 34, 56)"
    },{
      "property": "borderLeftColor",
      "saw": "rgb(12, 34, 56)"
    }]
  },{
    "identifier": "<p id=\"rgba-fail\">rgba-fail</p>",
    "results": [{
      "property": "borderTopColor",
      "saw": "rgba(12, 34, 56, 0.78)"
    },{
      "property": "borderRightColor",
      "saw": "rgba(12, 34, 56, 0.78)"
    },{
      "property": "borderBottomColor",
      "saw": "rgba(12, 34, 56, 0.78)"
    },{
      "property": "borderLeftColor",
      "saw": "rgba(12, 34, 56, 0.78)"
    }]
  },{
    "identifier": "<p id=\"color-name-fail\">color-name-fail</p>",
    "results": [{
      "property": "borderTopColor",
      "saw": "rgb(128, 0, 128)"
    },{
      "property": "borderRightColor",
      "saw": "rgb(128, 0, 128)"
    },{
      "property": "borderBottomColor",
      "saw": "rgb(128, 0, 128)"
    },{
      "property": "borderLeftColor",
      "saw": "rgb(128, 0, 128)"
    }]
  }]
}

describe('border color tests', () => {
  test('fails when incorrect border colors used', async () => {
    await main.pixelpolice(url, testConfig, true).then(result => {
      expect(result).toMatchObject(expected)
    })
  })
})
