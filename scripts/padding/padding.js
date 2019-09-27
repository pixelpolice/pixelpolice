// modified from https://stackoverflow.com/a/53936623

const test = (computedPadding, allowedPaddingValues) => {
  let testPassed = true

  allowedPaddingValues.push('0px') // coputedStyle defaults to 0px when no padding is defined

  if (allowedPaddingValues.indexOf(computedPadding) === -1) {
    testPassed = false
  }

  return testPassed
}

module.exports = {
  test
}
