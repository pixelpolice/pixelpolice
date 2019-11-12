var rgb = require("rgb")

const configToRGBA = (colorArr) => {
  const convertedColors = []
  colorArr.forEach(color => {
    convertedColors.push(rgb(color).replace(/\,/g, ', '))
  })
  return convertedColors
}

const test = (computedColor, allowedColors, allowTransparent) => {
  if (allowTransparent && computedColor === 'rgba(0, 0, 0, 0)') {
    return true
  }
  const testPassed = allowedColors.indexOf(computedColor) !== -1
  return testPassed
}

module.exports = {
  test,
  configToRGBA
}
