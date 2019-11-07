#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const program = require('commander');
const appRoot = require('app-root-path')
const packageJSON = require(path.join('..', 'package'))

const main = require('../scripts/main')
const messages = require('../scripts/messages')
const configValidator = require('../scripts/config-validator.js')
const color = require('../scripts/color/color')

const commaSeparatedList = value => {
  return value.split(',');
}

program
  .arguments('<config> [options]')
  .option('-c, --config <path>', 'set config path')
  // .option('-u, --urls <list>', 'comma separated list of urls to test. Overrides config file', commaSeparatedList)
  .option('-v, --verbose', 'output all test details', false)
  .version(packageJSON.version)
  .parse(process.argv);

if (program.config) {
  console.log(messages.logo());

  const config = require(path.resolve(program.config))
  const pixelpoliceTests = []
  const colourPropertiesToRGBA = [
    'color',
    'backgroundColor',
    'borderTopColor',
    'borderRightColor',
    'borderBottomColor',
    'borderLeftColor',
    'outlineColor'
  ]

  if (configValidator.check(config) !== true) {
    throw new Error('Invalid config')
  }

  config.tests.forEach(test => {
    test.viewport = test.viewport !== undefined ? test.viewport : {}
    test.viewport.width = test.viewport.width !== undefined ? test.viewport.width : 800
    test.viewport.height = test.viewport.height !== undefined ? test.viewport.height : 600

    colourPropertiesToRGBA.forEach(property => {
      if (test.expectedPropertyValues.hasOwnProperty(property)) {
        test.expectedPropertyValues[property] = color.configToRGBA(test.expectedPropertyValues[property])
      }
    })
  })

  config.urls.forEach(url => {
    config.tests.forEach(test => {
      console.log(messages.testBeingRun(url, test));
      pixelpoliceTests.push(main.pixelpolice(url, test))
    })
  })

  Promise.all(pixelpoliceTests).then(reports => {
    console.log(messages.fullReport(reports, program.verbose));
  })


} else {
  console.error(chalk.red('ERROR config path (-c, --config) is required\n'));
  program.help();
}
