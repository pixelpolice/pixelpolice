#!/usr/bin/env node
const fs = require('fs')
const main = require('../scripts/main')
const configValidator = require('../scripts/config-validator.js')
const color = require('../scripts/color/color')


const argv = require('yargs')
  .scriptName("pixelpolice")
  .usage('$0 <cmd> [args]')
  .config('config')
  .argv

const config = JSON.parse(fs.readFileSync(argv.config, 'utf-8'));

if (configValidator.check(config) !== true) {
  throw new Error('Invalid config')
}

const userPropertyValues = config.propertyValues;

if (userPropertyValues.hasOwnProperty('color')) {
  config.propertyValues.color = color.configToRGBA(userPropertyValues.color)
}

if (userPropertyValues.hasOwnProperty('backgroundColor')) {
  config.propertyValues.backgroundColor = color.configToRGBA(userPropertyValues.backgroundColor)
}

if (userPropertyValues.hasOwnProperty('borderTopColor')) {
  config.propertyValues.borderTopColor = color.configToRGBA(userPropertyValues.borderTopColor)
}

if (userPropertyValues.hasOwnProperty('outlineColor')) {
  config.propertyValues.outlineColor = color.configToRGBA(userPropertyValues.outlineColor)
}

// colorConfigRGBA.borderTopColor = color.configToRGBA(config.propertyValues.borderTopColor);
// colorConfigRGBA.borderRightColor = color.configToRGBA(config.propertyValues.borderRightColor);
// colorConfigRGBA.borderBottomColor = color.configToRGBA(config.propertyValues.borderBottomColor);
// colorConfigRGBA.borderLeftColor = color.configToRGBA(config.propertyValues.borderLeftColor);

console.log(config)


main.pixelpolice(config)
