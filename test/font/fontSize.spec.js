const main = require('../../scripts/main.js')
const messages = require('../../scripts/messages.js')

const testConfig = {
  "urls": ["http://localhost:8080/font/fontSize.spec.html"],
  "propertyValues": {
    "fontSize": ["24px"]
  }
}

const failedMessages = []
failedMessages.push(messages.elementFailedReport("<p id=\"font-size-fail\">font-size-fail</p>", [{
  "property": "fontSize",
  "saw": "48px"
}], testConfig))

const totalPassedTests = 1;
const totalFailedTests = 1;
const numberOfElementsTested = 2;
const url = testConfig.urls[0];


const expected = `
testing: ${url}${failedMessages[0]}${messages.urlReport(url, numberOfElementsTested, totalPassedTests, totalFailedTests)}`

describe('font tests', () => {
  test('fails when incorrect font size used', async () => {
    console.log = jest.fn();
    await main.pixelpolice(testConfig).then(() => {
      expect(console.log.mock.calls.join('')).toBe(expected)
    })
  })
})
