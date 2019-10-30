const main = require('../../scripts/main.js')
const messages = require('../../scripts/messages.js')
const config = require('./fontSize.spec.json')
const testConfig = config.tests[0]

const failedMessages = []
failedMessages.push(messages.elementFailedReport("<p id=\"font-size-fail\">font-size-fail</p>", [{
  "property": "fontSize",
  "saw": "48px"
}], testConfig))

const totalPassedTests = 1;
const totalFailedTests = 1;
const numberOfElementsTested = 2;
const url = config.urls[0];


const expected = `${messages.testBeingRun(url, testConfig)}${failedMessages[0]}${messages.urlReport(url, testConfig, numberOfElementsTested, totalPassedTests, totalFailedTests)}`

describe('font tests', () => {
  test('fails when incorrect font size used', async () => {
    console.log = jest.fn();
    await main.pixelpolice(url, testConfig, true).then(() => {
      expect(console.log.mock.calls.join('')).toBe(expected)
    })
  })
})