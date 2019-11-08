const color = require('../color/color')

const borderNotShown = (computedBorderStyle, computedBorderWidth) => {
  if ((computedBorderStyle === 'none') || (computedBorderWidth === '0px')) { // border only shows if computedBorderStyle and computedBorderWidth has been set
    return true
  }
  return false
}

const colorTest = (computedBorderColor, computedBorderStyle, computedBorderWidth, allowedBorderColorValues) => {
  if (borderNotShown(computedBorderStyle, computedBorderWidth)) {
    return true
  }

  return color.test(computedBorderColor, allowedBorderColorValues, true)
}

const styleTest = (computedBorderStyle, computedBorderWidth, allowedBorderStyleValues) => {
  let testPassed = false

  if (borderNotShown(computedBorderStyle, computedBorderWidth)) {
    return true
  }

  allowedBorderStyleValues.forEach(allowedBorderStyle => {
    if (allowedBorderStyle === computedBorderStyle) {
      testPassed = true
    }
  })

  return testPassed
}

const widthTest = (computedBorderWidth, computedBorderStyle, allowedBorderWidthValues) => {
  let testPassed = false

  if (borderNotShown(computedBorderStyle, computedBorderWidth)) {
    return true
  }

  allowedBorderWidthValues.forEach(allowedBorderWidth => {
    if (allowedBorderWidth === computedBorderWidth) {
      testPassed = true
    }
  })

  return testPassed
}

module.exports = {
  colorTest,
  styleTest,
  widthTest
}
