const main = require('../scripts/main.js')
const messages = require('../scripts/messages.js')
const config = require('./backgroundColor.spec.json')
const testConfig = config.tests[0]

const failedMessages = []
failedMessages.push(messages.elementFailedReport("<p id=\"hex-fail\">hex-fail</p>", [{
  "property": "backgroundColor",
  "saw": "rgb(18, 52, 86)"
}], testConfig))
failedMessages.push(messages.elementFailedReport("<p id=\"rgb-fail\">rgb-fail</p>", [{
  "property": "backgroundColor",
  "saw": "rgb(12, 34, 56)"
}], testConfig))
failedMessages.push(messages.elementFailedReport("<p id=\"rgba-fail\">rgba-fail</p>", [{
  "property": "backgroundColor",
  "saw": "rgba(12, 34, 56, 0.78)"
}], testConfig))
failedMessages.push(messages.elementFailedReport("<p id=\"color-name-fail\">color-name-fail</p>", [{
  "property": "backgroundColor",
  "saw": "rgb(128, 0, 128)"
}], testConfig))

const totalPassedTests = 5;
const totalFailedTests = 4;
const numberOfElementsTested = 9;
const url = config.urls[0];


const expected = `${messages.testBeingRun(url, testConfig)}${failedMessages[0]}${failedMessages[1]}${failedMessages[2]}${failedMessages[3]}${messages.urlReport(url, testConfig, numberOfElementsTested, totalPassedTests, totalFailedTests)}`

describe('colour tests', () => {
  test('fails when incorrect colors used', async () => {
    console.log = jest.fn();
    await main.pixelpolice(url, testConfig).then(() => {
      expect(console.log.mock.calls.join('')).toBe(expected)
    })
  })
})
