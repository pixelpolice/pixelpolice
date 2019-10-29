const chalk = require('chalk')

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
  return `${chalk.black.bgRgb(247, 168, 0)(' testing ')} ${url} @ ${config.viewport.width} x ${config.viewport.height}`
}

const urlReport = (urlTested, config, elementsCount, passedTestCount, failedTestCount) => {
  return `
=====================================================================

  ${chalk.bgRed.black(' FAIL ')}

  URL:  ${urlTested}
  Viewport:  ${config.viewport.width} x ${config.viewport.height}
  Number of elements tested: ${elementsCount}
  ${chalk.green(`Passed tests: ${passedTestCount}`)}
  ${chalk.red(`Failed tests: ${failedTestCount}`)}

=====================================================================`
}

const elementFailedReport = (identifier, failedMessages, config) => {
  let messages = ''
  failedMessages.forEach((message) => {
    messages = messages + `${chalk.red(`
● Failed when testing ${chalk.bold(message.property)} property`)}
    - Observed: ${message.saw}
    - Expected one of: ${config.propertyValues[message.property]}
`
  })
  return `
---------------------------------------------------------------------

${chalk.bgRed.black(' FAIL ')}

${chalk.red('->')} ${identifier}
${messages}`
}

const fullReport = reports => {
  let reportMessages = ''

  reports.forEach(report => {
    reportMessages += `
${chalk.bgRed.black(' FAIL ')} ${report.url} @ ${report.config.viewport.width} x ${report.config.viewport.height}
Number of elements tested: ${report.elementsCount}
${chalk.green(`Passed tests: ${report.totalPassedTests}`)}
${chalk.red(`Failed tests: ${report.totalFailedTests}`)}
`
  })

  return `
=====================================================================
=====================================================================

FULL REPORT
${reportMessages}
=====================================================================
=====================================================================
`
}

module.exports = {
  logo,
  testBeingRun,
  urlReport,
  elementFailedReport,
  fullReport
}
