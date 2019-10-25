const chalk = require('chalk')

const validateProperties = (config) => {
  const allowedProperties = [
    'backgroundColor',
    'borderTopColor',
    'borderLeftColor',
    'borderBottomColor',
    'borderRightColor',
    'color',
    'outlineColor',
    'outlineStyle',
    'paddingTop',
    'paddingLeft',
    'paddingBottom',
    'paddingRight'
  ]

  for (const key of Object.keys(config.propertyValues)) {
    if (allowedProperties.indexOf(key) === -1) {
      console.error(chalk.red(`Sorry pixelpolice currently is unable to test property: ${key}`))
      return false
    }
  }

  return true
}

const validatePropertyValues = (config) => {
  const units = {
    singleLowerCaseWord: /^[a-z]*/,
    px: /\d*\.?\d+px/,
    color: /^#([A-Fa-f0-9]{3,4}){1,2}$|^rgb\(|^rgba\(|(transparent)/
  }
  const allowedPropertiesAndUnits = {
    backgroundColor: units.color,
    borderTopColor: units.color,
    borderLeftColor: units.color,
    borderBottomColor: units.color,
    borderRightColor: units.color,
    color: units.color,
    outlineColor: units.color,
    paddingTop: units.px,
    paddingLeft: units.px,
    paddingBottom: units.px,
    paddingRight: units.px
  }
  let currentTest
  let validUnits = true

  for (const key of Object.keys(config.propertyValues)) {
    if (allowedPropertiesAndUnits[key] !== undefined) {
      config.propertyValues[key].forEach((property) => {
        currentTest = allowedPropertiesAndUnits[key].test(property)
        if (currentTest === false) {
          validUnits = false
        }
      })
    }
  }

  return validUnits
}

const validatePropertyCombinations = (config) => {
  let validPropertyCombinations = false

  if (Object.prototype.hasOwnProperty.call(config.propertyValues, 'outlineColor')) {
    if (Object.prototype.hasOwnProperty.call(config.propertyValues, 'outlineStyle')) {
      validPropertyCombinations = true
    } else {
      validPropertyCombinations = false
      console.error(chalk.red('Config error: outlineColor requires outlineStyle\n'))
    }
  } else {
    validPropertyCombinations = true
  }

  return validPropertyCombinations
}

const check = (config) => {
  console.log('\nValidating config file\n')

  if (validateProperties(config) && validatePropertyCombinations(config) && validatePropertyValues(config)) {
    return true
  } else {
    return false
  }
}

module.exports = {
  check
}
