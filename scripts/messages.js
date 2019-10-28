const chalk = require('chalk')

const logo = () => {
  return chalk.yellow.bgBlue(`
_____            ______                __________
___________(_)___  _________  /  _________________  /__(_)__________
___  __ \\_  /__  |/_/  _ \\_  /   ___  __ \\  __ \\_  /__  /_  ___/  _ \\
__  /_/ /  / __>  < /  __/  /    __  /_/ / /_/ /  / _  / / /__ /  __/
_  .___//_/  /_/|_| \\___//_/     _  .___/\\____//_/  /_/  \\___/ \\___/
/_/                              /_/
`)}

const urlReport = (urlTested, elementsCount, passedTestCount, failedTestCount) => {
  return `
==============================================================

  ${chalk.bgRed.black(' FAIL ')}

  URL:  ${urlTested}
  Number of elements tested: ${elementsCount}
  ${chalk.green(`Passed tests: ${passedTestCount}`)}
  ${chalk.red(`Failed tests: ${failedTestCount}`)}

==============================================================`
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
--------------------------------------------------------------

${chalk.bgRed.black(' FAIL ')}

${chalk.red('->')} ${identifier}
${messages}`
}

module.exports = {
  logo,
  urlReport,
  elementFailedReport
}
