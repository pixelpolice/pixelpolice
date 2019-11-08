const chalk = require('chalk')
const properties = require('../data/properties')

const validateProperties = (config) => {
  const allowedProperties = []

  properties.forEach(property => {
    allowedProperties.push(property.name)
  })

  let validProperties = true

  config.tests.forEach(test => {
    for (const key of Object.keys(test.expectedPropertyValues)) {
      if (allowedProperties.indexOf(key) === -1) {
        console.error(chalk.red(`Sorry pixelpolice currently is unable to test property: ${key}`))
        validProperties = false
      }
    }
  })

  return validProperties
}

const validatePropertyValues = (config) => {
  const units = {
    // singleLowerCaseWord: /^[a-z]*/,
    singleNumber: /^[0-9]*$/,
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
    paddingRight: units.px,
    fontSize: units.px,
    fontWeight: units.singleNumber
  }
  let currentTest
  let validUnits = true

  config.tests.forEach(test => {
    for (const key of Object.keys(test.expectedPropertyValues)) {
      if (allowedPropertiesAndUnits[key] !== undefined) {
        test.expectedPropertyValues[key].forEach((property) => {
          currentTest = allowedPropertiesAndUnits[key].test(property)

          if (currentTest === false) {
            validUnits = false
          }
        })
      }
    }
  })

  return validUnits
}

const check = (config) => {
  console.log('\nValidating config file\n')

  if (validateProperties(config) && validatePropertyValues(config)) {
    return true
  } else {
    return false
  }
}

module.exports = {
  check
}
