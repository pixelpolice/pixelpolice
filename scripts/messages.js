const chalk = require('chalk')

const urlReport = (urlTested, elementsCount, passedTestCount, failedTestCount) => {
  return `
==============================================================

  ${chalk.bgRed.black(' FAIL ')} ${urlTested}
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
  urlReport,
  elementFailedReport
}
