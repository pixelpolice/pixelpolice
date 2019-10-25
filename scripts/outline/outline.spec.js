const outline = require('./outline.js')

describe('outline test', () => {
  test('passing outline colour test when using browser default outline style', () => {
    const computedOutlineColor = '#123'
    const computedOutlineStyle = 'none'
    const allowedOutlineColorValues = ['does-not-matter']
    expect(outline.colorTest(computedOutlineColor, computedOutlineStyle, allowedOutlineColorValues)).toBeTruthy()
  })

  test('passing outline colour test when computed outline style applied', () => {
    const computedOutlineColor = '#123'
    const computedOutlineStyle = 'solid'
    const allowedOutlineColorValues = ['#123']
    expect(outline.colorTest(computedOutlineColor, computedOutlineStyle, allowedOutlineColorValues)).toBeTruthy()
  })

  test('failing outline colour test', () => {
    const computedOutlineColor = '#123'
    const computedOutlineStyle = 'solid'
    const allowedOutlineColorValues = ['#456']
    expect(outline.colorTest(computedOutlineColor, computedOutlineStyle, allowedOutlineColorValues)).toBeFalsy()
  })

  test('passing outline style test', () => {
    const computedOutlineStyle = 'groove'
    const allowedOutlineStyleValues = ['groove']
    expect(outline.styleTest(computedOutlineStyle, allowedOutlineStyleValues)).toBeTruthy()
  })

  test('passing outline style test when using browser default outline style', () => {
    const computedOutlineStyle = 'none'
    const allowedOutlineStyleValues = ['does-not-matter']
    expect(outline.styleTest(computedOutlineStyle, allowedOutlineStyleValues)).toBeTruthy()
  })

  test('failing outline style test', () => {
    const computedOutlineStyle = 'solid'
    const allowedOutlineStyleValues = ['groove']
    expect(outline.styleTest(computedOutlineStyle, allowedOutlineStyleValues)).toBeFalsy()
  })
})
