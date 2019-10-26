const main = require('../../scripts/main.js')
const messages = require('../../scripts/messages.js')
const testConfig = require('./outlineStyle.spec.json')

const failedMessages = []
failedMessages.push(messages.elementFailedReport("<p id=\"outline-style-fail\">outline-style-fail</p>", [{
  "property": "outlineStyle",
  "saw": "dashed"
}], testConfig))

const totalPassedTests = 2;
const totalFailedTests = 1;
const numberOfElementsTested = 3;
const url = testConfig.urls[0];


const expected = `
testing: ${url}${failedMessages[0]}${messages.urlReport(url, numberOfElementsTested, totalPassedTests, totalFailedTests)}`

describe('outline style tests', () => {
  test('fails when incorrect outline styles used', async () => {
    console.log = jest.fn();
    await main.pixelpolice(testConfig).then(() => {
      expect(console.log.mock.calls.join('')).toBe(expected)
    })
  })
})
