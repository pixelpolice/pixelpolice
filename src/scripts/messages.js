const chalk = require('chalk')

const urlViewport = (url, config) => {
  return `${url} @ ${config.viewport.width} x ${config.viewport.height}`
}

const logo = () => {
  return chalk.rgb(247, 168, 0).bold.bgRgb(0, 45, 115)(`
  _____       _     ______    __          ____________  _
  ___________(_)__  _________/ /  _________________/ /_(_)__________
  ___/ __ \\_/ /_/ |/_// _ \\_/ /   ___/ __ \\/ __ \\_/ /_/ /_/ ___// _ \\
  __/ /_/ // / _>  < /  __// /    __/ /_/ / /_/ // / / / / /__ /  __/
  _/ .___//_/ /_/|_| \\___//_/     _/ .___/\\____//_/ /_/  \\___/ \\___/
  /_/                             /_/

`)
}

const testBeingRun = (url, config) => {
  return `${chalk.black.bgRgb(247, 168, 0)(' testing ')} ${urlViewport(url, config)}`
}

const elementFailedReport = (identifier, failedMessages, config) => {
  let messages = ''
  failedMessages.forEach((message) => {
    messages = messages + `${chalk.red(`
● Failed when testing ${chalk.bold(message.property)} property`)}
    - Observed: ${message.saw}
    - Expected one of: ${config.expectedPropertyValues[message.property]}
`
  })
  return `
---------------------------------------------------------------------

${chalk.red('->')} ${identifier}
${messages}`
}

const fullReport = (reports, verbose) => {
  let reportMessages = ''

  reports.forEach((report, i) => {
    const flag = report.totalFailedTests === 0 ? chalk.bgGreen.black(' PASS ') : chalk.bgRed.black(' FAIL ')
    if (i !== 0 && verbose) {
      reportMessages += `
=====================================================================
`
    }
    reportMessages += `
${flag} ${urlViewport(report.url, report.test)}
 - Number of elements tested: ${report.elementsCount}
 - ${chalk.green(`Passed tests: ${report.totalPassedTests}`)}
 - ${chalk.red(`Failed tests: ${report.totalFailedTests}`)}
`

    if (verbose) {
      report.failedTests.forEach(test => {
        reportMessages += elementFailedReport(test.identifier, test.results, report.test)
      })
    }
  })

  return `
█████████████████████████████████████████████████████████████████████

${chalk.bold('PIXEL POLICE REPORT:')}
${reportMessages}
█████████████████████████████████████████████████████████████████████
`
}

module.exports = {
  logo,
  testBeingRun,
  fullReport
}
