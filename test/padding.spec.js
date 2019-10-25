const main = require('../scripts/main.js')
const testConfig = require('./padding.spec.json')

const failedMessages = []

failedMessages.push(main.elementFailedReport("<p id=\"px-padding-top-fail\">px-padding-top-fail</p>", [{
  "property": "paddingTop",
  "saw": "123px"
}], testConfig))
failedMessages.push(main.elementFailedReport("<p id=\"px-padding-right-fail\">px-padding-right-fail</p>", [{
  "property": "paddingRight",
  "saw": "123px"
}], testConfig))
failedMessages.push(main.elementFailedReport("<p id=\"px-padding-bottom-fail\">px-padding-bottom-fail</p>", [{
  "property": "paddingBottom",
  "saw": "123px"
}], testConfig))
failedMessages.push(main.elementFailedReport("<p id=\"px-padding-left-fail\">px-padding-left-fail</p>", [{
  "property": "paddingLeft",
  "saw": "123px"
}], testConfig))


// total tests = 36
const totalPassedTests = 32; // each element will have 4 padding properties
const totalFailedTests = 4;
const numberOfElementsTested = 9;
const url = testConfig.urls[0];


const expected = `
testing: ${url}${failedMessages[0]}${failedMessages[1]}${failedMessages[2]}${failedMessages[3]}${main.urlReport(url, numberOfElementsTested, totalPassedTests, totalFailedTests)}`

describe('background colour tests', () => {
  test('fails when incorrect colors used', async () => {
    console.log = jest.fn();
    await main.pixelpolice(testConfig).then(() => {
      expect(console.log.mock.calls.join('')).toBe(expected)
    })
  })
})