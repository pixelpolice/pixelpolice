#!/usr/bin/env node
const fs = require('fs')
const main = require('../scripts/main')
const messages = require('../scripts/messages')
const configValidator = require('../scripts/config-validator.js')
const color = require('../scripts/color/color')


const argv = require('yargs')
  .scriptName("pixelpolice")
  .usage('$0 <cmd> [args]')
  .config('config')
  .argv

const config = JSON.parse(fs.readFileSync(argv.config, 'utf-8'));

console.log(messages.logo());

if (configValidator.check(config) !== true) {
  throw new Error('Invalid config')
}

const userPropertyValues = config.propertyValues;
const colourPropertiesToRGBA = [
  'color',
  'backgroundColor',
  'borderTopColor',
  'borderRightColor',
  'borderBottomColor',
  'borderLeftColor',
  'outlineColor'
]

colourPropertiesToRGBA.forEach(property => {
  if (userPropertyValues.hasOwnProperty(property)) {
    config.propertyValues[property] = color.configToRGBA(userPropertyValues[property])
  }
})

console.log(config)

main.pixelpolice(config)
