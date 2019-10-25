const familyTest = (computedFontFamily, allowedFontFamilyValues) => {
  let testPassed = false

  allowedFontFamilyValues.forEach((allowedFontFamily) => {
    if (allowedFontFamily === computedFontFamily) {
      testPassed = true
    }
  })

  return testPassed
}

module.exports = {
  familyTest
}
