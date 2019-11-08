const messages = require('./messages.js')
const chalk = require('chalk')

const config = {
  urls: ['abcd.co.uk'],
  tests: [{
    viewport: {
      width: 123,
      height: 456
    },
    expectedPropertyValues: {
      color: ['#000000', '#FFFFFF']
    }
  },
  {
    viewport: {
      width: 345,
      height: 678
    },
    expectedPropertyValues: {
      color: ['#000000', '#FFFFFF']
    }
  }]
}

const reports = [{
  url: config.urls[0],
  test: config.tests[0],
  elementsCount: 5,
  totalPassedTests: 6,
  totalFailedTests: 7,
  failedTests: [{
    identifier: '<p id="hex-fail">hex-fail</p>',
    results: [{
      property: 'color',
      saw: 'rgb(18, 52, 86)'
    }]
  }, {
    identifier: '<p id="rgb-fail">rgb-fail</p>',
    results: [{
      property: 'color',
      saw: 'rgb(12, 34, 56)'
    }]
  }]
}, {
  url: config.urls[0],
  test: config.tests[1],
  elementsCount: 10,
  totalPassedTests: 20,
  totalFailedTests: 0,
  failedTests: []
}]

describe('messages', () => {
  test('returns correct logo', () => {
    const logo = chalk.rgb(247, 168, 0).bold.bgRgb(0, 45, 115)(`
  _____       _     ______    __          ____________  _
  ___________(_)__  _________/ /  _________________/ /_(_)__________
  ___/ __ \\_/ /_/ |/_// _ \\_/ /   ___/ __ \\/ __ \\_/ /_/ /_/ ___// _ \\
  __/ /_/ // / _>  < /  __// /    __/ /_/ / /_/ // / / / / /__ /  __/
  _/ .___//_/ /_/|_| \\___//_/     _/ .___/\\____//_/ /_/  \\___/ \\___/
  /_/                             /_/

`)
    expect(messages.logo()).toBe(logo)
  })

  test('returns the correct test being run message', () => {
    const expected = chalk.black.bgRgb(247, 168, 0)(' testing ') + ' abcd.co.uk @ 123 x 456'

    expect(messages.testBeingRun(config.urls[0], config.tests[0])).toBe(expected)
  })

  test('returns the correct full report message', () => {
    const verbose = false
    const expected = `
█████████████████████████████████████████████████████████████████████

${chalk.bold('PIXEL POLICE REPORT:')}

${chalk.bgRed.black(' FAIL ')} abcd.co.uk @ 123 x 456
 - Number of elements tested: 5
 - ${chalk.green('Passed tests: 6')}
 - ${chalk.red('Failed tests: 7')}

${chalk.bgGreen.black(' PASS ')} abcd.co.uk @ 345 x 678
 - Number of elements tested: 10
 - ${chalk.green('Passed tests: 20')}
 - ${chalk.red('Failed tests: 0')}

█████████████████████████████████████████████████████████████████████
`

    expect(messages.fullReport(reports, verbose)).toBe(expected)
  })

  test('returns the correct verbose full report message', () => {
    const verbose = true
    const expected = `
█████████████████████████████████████████████████████████████████████

${chalk.bold('PIXEL POLICE REPORT:')}

${chalk.bgRed.black(' FAIL ')} abcd.co.uk @ 123 x 456
 - Number of elements tested: 5
 - ${chalk.green('Passed tests: 6')}
 - ${chalk.red('Failed tests: 7')}

---------------------------------------------------------------------

${chalk.red('->')} <p id="hex-fail">hex-fail</p>
${chalk.red(`
● Failed when testing ${chalk.bold('color')} property`)}
    - Observed: rgb(18, 52, 86)
    - Expected one of: #000000,#FFFFFF

---------------------------------------------------------------------

${chalk.red('->')} <p id="rgb-fail">rgb-fail</p>
${chalk.red(`
● Failed when testing ${chalk.bold('color')} property`)}
    - Observed: rgb(12, 34, 56)
    - Expected one of: #000000,#FFFFFF

=====================================================================

${chalk.bgGreen.black(' PASS ')} abcd.co.uk @ 345 x 678
 - Number of elements tested: 10
 - ${chalk.green('Passed tests: 20')}
 - ${chalk.red('Failed tests: 0')}

█████████████████████████████████████████████████████████████████████
`

    expect(messages.fullReport(reports, verbose)).toBe(expected)
  })
})
