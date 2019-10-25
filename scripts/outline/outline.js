const color = require('../color/color')

const colorTest = (computedOutlineColor, computedOutlineStyle, allowedOutlineColorValues) => {
  let testPassed = false

  if (computedOutlineStyle === 'none') { // computedOutlineColor only shows if outlineStyle has been set
    testPassed = true
  } else {
    testPassed = color.test(computedOutlineColor, allowedOutlineColorValues)
  }

  return testPassed
}

const styleTest = (computedOutlineStyle, allowedOutlineStyleValues) => {
  let testPassed = false

  if (computedOutlineStyle === 'none') { // coputedStyle defaults to 0px when no padding is defined
    testPassed = true
  } else {
    allowedOutlineStyleValues.forEach((allowedOutlineStyle) => {
      if (allowedOutlineStyle === computedOutlineStyle) {
        testPassed = true
      }
    })
  }

  return testPassed
}

module.exports = {
  colorTest,
  styleTest
}
