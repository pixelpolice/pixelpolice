// modified from https://stackoverflow.com/a/53936623

const hexToRGBA = (hex) => {
  const getChunksFromString = (st, chunkSize) => st.match(new RegExp(`.{${chunkSize}}`, 'g'))
  const convertHexUnitTo256 = (hexStr) => parseInt(hexStr.repeat(2 / hexStr.length), 16)
  const getAlphafloat = (a) => { return a / 256 }
  const chunkSize = Math.floor((hex.length - 1) / 3)
  const hexArr = getChunksFromString(hex.slice(1), chunkSize)
  const [r, g, b, a] = hexArr.map(convertHexUnitTo256)

  if (a !== undefined) {
    return `rgba(${r}, ${g}, ${b}, ${getAlphafloat(a)})`
  } else {
    return `rgb(${r}, ${g}, ${b})`
  }
}

const configToRGBA = (colorArr) => {
  const convertedColors = []
  colorArr.forEach(color => {
    if (color.startsWith('#')) {
      convertedColors.push(hexToRGBA(color))
    } else if (color.startsWith('rgb')) {
      convertedColors.push(color)
    } else if (color === 'transparent') {
      convertedColors.push('rgba(0, 0, 0, 0)')
    } else {
      throw new Error(`${color} is invalid`)
    }
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
  hexToRGBA,
  test,
  configToRGBA
}
