const familyTest = (computedFontFamily, allowedFontFamilyValues) => {
  let testPassed = false

  allowedFontFamilyValues.forEach((allowedFontFamily) => {
    if (allowedFontFamily === computedFontFamily) {
      testPassed = true
    }
  })

  return testPassed
}

const weightTest = (computedFontWeight, allowedFontWeightValues) => {
  let testPassed = false

  allowedFontWeightValues.forEach((allowedFontWeight) => {
    if (computedFontWeight === allowedFontWeight) {
      testPassed = true
    }
  })

  return testPassed
}

module.exports = {
  familyTest,
  weightTest
}
