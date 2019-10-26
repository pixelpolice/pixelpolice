const font = require('./font.js')

describe('font family test', () => {
  test('passing font-family test', () => {
    const computedFontFamily = 'Arial'
    const allowedFontFamilyValues = ['Arial']
    expect(font.familyTest(computedFontFamily, allowedFontFamilyValues)).toBeTruthy()
  })

  test('failing font-family test', () => {
    const computedFontFamily = 'Arial'
    const allowedFontFamilyValues = ['Not Arial']
    expect(font.familyTest(computedFontFamily, allowedFontFamilyValues)).toBeFalsy()
  })

  test('passing font-weight test', () => {
    const computedFontWeight = '400'
    const allowedFontWeightValues = ['400']
    expect(font.weightTest(computedFontWeight, allowedFontWeightValues)).toBeTruthy()
  })

  test('failing font-weight test', () => {
    const computedFontWeight = '500'
    const allowedFontWeightValues = ['400']
    expect(font.weightTest(computedFontWeight, allowedFontWeightValues)).toBeFalsy()
  })

  test('passing font-size test', () => {
    const computedFontSize = '24px'
    const allowedFontSizeValues = ['24px']
    expect(font.weightTest(computedFontSize, allowedFontSizeValues)).toBeTruthy()
  })

  test('failing font-weight test', () => {
    const computedFontSize = '24px'
    const allowedFontSizeValues = ['48px']
    expect(font.weightTest(computedFontSize, allowedFontSizeValues)).toBeFalsy()
  })
})
