const color = require('./color.js')

describe('color configToRGBA', () => {
  test('passing colour test', () => {
    const colorsToConvert = ['rgba(0, 0, 0, 0.123)', 'rgb(0,0,0)', '#FFF', '#1234', '#FFFFFF']
    expect(color.configToRGBA(colorsToConvert)).toStrictEqual(['rgba(0, 0, 0, 0.123)', 'rgb(0, 0, 0)', 'rgb(255, 255, 255)', 'rgba(17, 34, 51, 0.26666666666666666)', 'rgb(255, 255, 255)'])
  })
})

describe('Color test', () => {
  test('passing colour test', () => {
    const computedColor = 'rgb(0, 0, 0)'
    const allowedColorsNormalised = ['rgb(0, 0, 0)']
    expect(color.test(computedColor, allowedColorsNormalised)).toBeTruthy()
  })

  test('passing colour test when allowing transparent colors', () => {
    const computedColor = 'rgba(0, 0, 0, 0)'
    const allowedColorsNormalised = ['rgb(0, 0, 0)']
    expect(color.test(computedColor, allowedColorsNormalised, true)).toBeTruthy()
  })

  test('fails colour test', () => {
    const computedColor = 'rgb(0, 0, 0)'
    const allowedColorsNormalised = ['rgb(255, 0, 0)']
    expect(color.test(computedColor, allowedColorsNormalised)).toBeFalsy()
  })

  test('fail colour test when not allowing transparent colors', () => {
    const computedColor = 'rgba(0, 0, 0, 0)'
    const allowedColorsNormalised = ['rgb(255, 0, 0)']
    expect(color.test(computedColor, allowedColorsNormalised)).toBeFalsy()
  })
})
