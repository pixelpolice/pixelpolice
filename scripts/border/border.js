const color = require('../color/color')

const colorTest = (computedBorderColor, computedBorderStyle, computedBorderWidth, allowedBorderColorValues) => {
  let testPassed = false

  if ((computedBorderStyle === 'none') && (computedBorderWidth = '0px')) { // computedBorderColor only shows if computedBorderStyle and computedBorderWidth has been set
    testPassed = true
  } else {
    testPassed = color.test(computedBorderColor, allowedBorderColorValues, true)
  }

  return testPassed
}

// const styleTest = (computedBorderStyle, allowedOutlineStyleValues) => {
//   let testPassed = false
//
//   if (computedBorderStyle === 'none') { // coputedStyle defaults to 0px when no padding is defined
//     testPassed = true
//   } else {
//     allowedOutlineStyleValues.forEach((allowedOutlineStyle) => {
//       if (allowedOutlineStyle === computedBorderStyle) {
//         testPassed = true
//       }
//     })
//   }
//
//   return testPassed
// }

module.exports = {
  colorTest
}
