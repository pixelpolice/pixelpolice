const units = {
  px: /\d*\.?\d+px/,
  color: /^#([A-Fa-f0-9]{3,4}){1,2}$|^rgb\(|^rgba\(|(transparent)/
}

const allowedPropertiesAndUnits = {
  borderTopColor: units.color,
  borderLeftColor: units.color,
  borderBottomColor: units.color,
  borderRightColor: units.color,
  color: units.color,
  paddingTop: units.px,
  paddingLeft: units.px,
  paddingBottom: units.px,
  paddingRight: units.px
}

const validatePropertyValues = (config) => {
  let currentTest
  let validUnits = true

  console.log('Validating config file')

  for (const key of Object.keys(config.propertyValues)) {
    if (allowedPropertiesAndUnits[key] === undefined) {
      return false
    }

    config.propertyValues[key].forEach((property) => {
      currentTest = allowedPropertiesAndUnits[key].test(property)
      if (currentTest === false) {
        validUnits = false
      }
    })
  }

  return validUnits
}

const validate = (config) => {
  return validatePropertyValues(config)
}

module.exports = {
  validate
}
