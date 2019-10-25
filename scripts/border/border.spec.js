const border = require('./border.js')

describe('border color test', () => {
  test('passing border colour test when using browser default border-style and border-width', () => {
    const computedBorderColor = '#123'
    const computedBorderStyle = 'none'
    const computedBorderWidth = '0px'
    const allowedBorderColorValues = ['does-not-matter']
    expect(border.colorTest(computedBorderColor, computedBorderStyle, computedBorderWidth, allowedBorderColorValues)).toBeTruthy()
  })

  test('passing border colour test when computed border style and width applied', () => {
    const computedBorderColor = '#123'
    const computedBorderStyle = 'solid'
    const computedBorderWidth = '4px'
    const allowedBorderColorValues = ['#123']
    expect(border.colorTest(computedBorderColor, computedBorderStyle, computedBorderWidth, allowedBorderColorValues)).toBeTruthy()
  })

  test('failing border colour test', () => {
    const computedBorderColor = '#123'
    const computedBorderStyle = 'solid'
    const computedBorderWidth = '4px'
    const allowedBorderColorValues = ['#456']
    expect(border.colorTest(computedBorderColor, computedBorderStyle, computedBorderWidth, allowedBorderColorValues)).toBeFalsy()
  })
})
