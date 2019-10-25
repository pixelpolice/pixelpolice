const main = require('../../scripts/main.js')
const testConfig = require('./outlineColor.spec.json')

const failedMessages = []
failedMessages.push(main.elementFailedReport("<p id=\"hex-fail\">hex-fail</p>", [{
  "property": "outlineColor",
  "saw": "rgb(18, 52, 86)"
}], testConfig))
failedMessages.push(main.elementFailedReport("<p id=\"rgb-fail\">rgb-fail</p>", [{
  "property": "outlineColor",
  "saw": "rgb(12, 34, 56)"
}], testConfig))
failedMessages.push(main.elementFailedReport("<p id=\"rgba-fail\">rgba-fail</p>", [{
  "property": "outlineColor",
  "saw": "rgba(12, 34, 56, 0.78)"
}], testConfig))
failedMessages.push(main.elementFailedReport("<p id=\"color-name-fail\">color-name-fail</p>", [{
  "property": "outlineColor",
  "saw": "rgb(128, 0, 128)"
}], testConfig))

const totalPassedTests = 14;
const totalFailedTests = 4;
const numberOfElementsTested = 9;
const url = testConfig.urls[0];


const expected = `
testing: ${url}${failedMessages[0]}${failedMessages[1]}${failedMessages[2]}${failedMessages[3]}${main.urlReport(url, numberOfElementsTested, totalPassedTests, totalFailedTests)}`

describe('outline color tests', () => {
  test('fails when incorrect outline colors used', async () => {
    console.log = jest.fn();
    await main.pixelpolice(testConfig).then(() => {
      expect(console.log.mock.calls.join('')).toBe(expected)
    })
  })
})