const test = (computedMargin, allowedMarginValues) => {
  let testPassed = false

  if (computedMargin === '0px') { // coputedStyle defaults to 0px when no margin is defined
    return true
  }

  allowedMarginValues.forEach((allowedPadding) => {
    if (allowedPadding === computedMargin) {
      testPassed = true
    }
  })

  return testPassed
}

module.exports = {
  test
}
