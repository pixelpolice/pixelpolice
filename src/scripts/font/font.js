const familyTest = (computedFontFamily, allowedFontFamilyValues) => {
  let testPassed = false

  allowedFontFamilyValues.forEach((allowedFontFamily) => {
    if (allowedFontFamily === computedFontFamily) {
      testPassed = true
    }
  })

  return testPassed
}

const weightTest = (computedFontWeight, allowedFontSizeValues) => {
  let testPassed = false

  allowedFontSizeValues.forEach((allowedFontWeight) => {
    if (computedFontWeight === allowedFontWeight) {
      testPassed = true
    }
  })

  return testPassed
}

const sizeTest = (computedFontSize, allowedFontSizeValues) => {
  let testPassed = false

  allowedFontSizeValues.forEach((allowedFontSize) => {
    if (computedFontSize === allowedFontSize) {
      testPassed = true
    }
  })

  return testPassed
}

module.exports = {
  familyTest,
  weightTest,
  sizeTest
}
