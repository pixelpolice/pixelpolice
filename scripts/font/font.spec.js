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
    const computedFontFamily = '400'
    const allowedFontFamilyValues = ['400']
    expect(font.weightTest(computedFontFamily, allowedFontFamilyValues)).toBeTruthy()
  })

  test('failing font-weight test', () => {
    const computedFontFamily = '500'
    const allowedFontFamilyValues = ['400']
    expect(font.weightTest(computedFontFamily, allowedFontFamilyValues)).toBeFalsy()
  })
})
