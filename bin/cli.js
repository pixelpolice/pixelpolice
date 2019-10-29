#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const appRoot = require('app-root-path')
const main = require('../scripts/main')
const messages = require('../scripts/messages')
const configValidator = require('../scripts/config-validator.js')
const color = require('../scripts/color/color')


const argv = require('yargs')
  .scriptName("pixelpolice")
  .usage('$0 <cmd> [args]')
  .config('config')
  .argv

// const config = JSON.parse(fs.readFileSync(argv.config, 'utf-8'));
const config = require(path.resolve(argv.config))

console.log(messages.logo());

if (configValidator.check(config) !== true) {
  throw new Error('Invalid config')
}

// const userPropertyValues = config.propertyValues;
const colourPropertiesToRGBA = [
  'color',
  'backgroundColor',
  'borderTopColor',
  'borderRightColor',
  'borderBottomColor',
  'borderLeftColor',
  'outlineColor'
]

config.tests.forEach(test => {
  colourPropertiesToRGBA.forEach(property => {
    if (test.propertyValues.hasOwnProperty(property)) {
      test.propertyValues[property] = color.configToRGBA(test.propertyValues[property])
    }
  })
})

// console.log(JSON.stringify(config, null, 4));

const pixelpoliceTests = []

config.urls.forEach(url => {
  config.tests.forEach(test => {
    pixelpoliceTests.push(main.pixelpolice(url, test))
  })
})

Promise.all(pixelpoliceTests).then(reports => {
  console.log(messages.fullReport(reports));
})
