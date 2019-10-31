const main = require('../scripts/main.js')
const messages = require('../scripts/messages.js')
const config = require('./padding.spec.json')

const testConfig = config.tests[0]
const url = config.urls[0];

const expected = {
  url: url,
  config: testConfig,
  elementsCount: 9,
  totalPassedTests: 32,
  totalFailedTests: 4,
  failedTests: [{
    "identifier": "<p id=\"px-padding-top-fail\">px-padding-top-fail</p>",
    "results": [{
      "property": "paddingTop",
      "saw": "123px"
    }]
  },{
    "identifier": "<p id=\"px-padding-right-fail\">px-padding-right-fail</p>",
    "results": [{
      "property": "paddingRight",
      "saw": "123px"
    }]
  },{
    "identifier": "<p id=\"px-padding-bottom-fail\">px-padding-bottom-fail</p>",
    "results": [{
      "property": "paddingBottom",
      "saw": "123px"
    }]
  },{
    "identifier": "<p id=\"px-padding-left-fail\">px-padding-left-fail</p>",
    "results": [{
      "property": "paddingLeft",
      "saw": "123px"
    }]
  }]
}

describe('padding tests', () => {
  test('fails when incorrect paddings used', async () => {
    await main.pixelpolice(url, testConfig, true).then(result => {
      expect(result).toMatchObject(expected)
    })
  })
})
