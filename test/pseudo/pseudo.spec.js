const main = require('../../scripts/main.js')
const messages = require('../../scripts/messages.js')
const config = require('./pseudo.spec.json')
const testConfig = config.tests[0]

const failedMessages = []
failedMessages.push(messages.elementFailedReport("::before <p id=\"pseudo-before-fail\">pseudo-before-fail</p>", [{
  "property": "color",
  "saw": "rgb(255, 0, 0)"
}], testConfig))
failedMessages.push(messages.elementFailedReport("::after <p id=\"pseudo-after-fail\">pseudo-after-fail</p>", [{
  "property": "color",
  "saw": "rgb(255, 0, 0)"
}], testConfig))


const totalPassedTests = 7;
const totalFailedTests = 2;
const numberOfElementsTested = 9;
const url = config.urls[0];


const expected = `${failedMessages[0]}${failedMessages[1]}${messages.urlReport(url, testConfig, numberOfElementsTested, totalPassedTests, totalFailedTests)}`

describe('pseudo element tests', () => {
  test('fails when incorrect colors used on psdeuo elements', async () => {
    console.log = jest.fn();
    await main.pixelpolice(url, testConfig, true).then(() => {
      expect(console.log.mock.calls.join('')).toBe(expected)
    })
  })
})
