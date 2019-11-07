const test = (computedPadding, allowedPaddingValues) => {
  let testPassed = false

  if (computedPadding === '0px') { // coputedStyle defaults to 0px when no padding is defined
    return true
  }

  allowedPaddingValues.forEach((allowedPadding) => {
    if (allowedPadding === computedPadding) {
      testPassed = true
    }
  })

  return testPassed
}

module.exports = {
  test
}
