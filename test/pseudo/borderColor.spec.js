const main = require('../../scripts/main.js')
const messages = require('../../scripts/messages.js')
const config = require('./borderColor.spec.json')
const testConfig = config.tests[0]

const failedMessages = []
failedMessages.push(messages.elementFailedReport("<p id=\"hex-fail\">hex-fail</p>", [{
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
}], testConfig))
failedMessages.push(messages.elementFailedReport("<p id=\"rgb-fail\">rgb-fail</p>", [{
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
}], testConfig))
failedMessages.push(messages.elementFailedReport("<p id=\"rgba-fail\">rgba-fail</p>", [{
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
}], testConfig))
failedMessages.push(messages.elementFailedReport("<p id=\"color-name-fail\">color-name-fail</p>", [{
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
}], testConfig))

const totalPassedTests = 16;
const totalFailedTests = 16;
const numberOfElementsTested = 8;
const url = config.urls[0];


const expected = `${failedMessages[0]}${failedMessages[1]}${failedMessages[2]}${failedMessages[3]}${messages.urlReport(url, testConfig, numberOfElementsTested, totalPassedTests, totalFailedTests)}`

describe('border color tests', () => {
  test('fails when incorrect border colors used', async () => {
    console.log = jest.fn();
    await main.pixelpolice(url, testConfig, true).then(() => {
      expect(console.log.mock.calls.join('')).toBe(expected)
    })
  })
})
