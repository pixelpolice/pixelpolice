const color = require('./color.js')

describe('hexToRGBA', () => {
  test('3 digit hex is converted into rgb', () => {
    expect(color.hexToRGBA('#000')).toBe('rgb(0, 0, 0)')
  })

  test('6 digit hex is converted into rgb', () => {
    expect(color.hexToRGBA('#000000')).toBe('rgb(0, 0, 0)')
  })

  test('4 digit hex is converted into rgba', () => {
    expect(color.hexToRGBA('#000a')).toBe('rgba(0, 0, 0, 0.6640625)')
  })

  test('8 digit hex is converted into rgb', () => {
    expect(color.hexToRGBA('#000000aa')).toBe('rgba(0, 0, 0, 0.6640625)')
  })
})

describe('color configToRGBA', () => {
  test('passing colour test', () => {
    colorsToConvert = ['rgba(0, 0, 0, 123)', 'rgb(0, 0, 0)', '#FFF', '#1234', '#FFFFFF']
    expect(color.configToRGBA(colorsToConvert)).toStrictEqual(['rgba(0, 0, 0, 123)', 'rgb(0, 0, 0)', 'rgb(255, 255, 255)', 'rgba(17, 34, 51, 0.265625)', 'rgb(255, 255, 255)'])
  })
})

describe('Color test', () => {
  test('passing colour test', () => {
    computedColor = 'rgb(0, 0, 0)'
    allowedColorsNormalised = ['rgb(0, 0, 0)']
    expect(color.test(computedColor, allowedColorsNormalised)).toBeTruthy()
  })

  test('fails colour test', () => {
    computedColor = 'rgb( 0, 0, 0)'
    allowedColorsNormalised = ['rgb(255, 0, 0)']
    expect(color.test(computedColor, allowedColorsNormalised)).toBeFalsy()
  })
})
