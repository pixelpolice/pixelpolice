const border = require('./border.js')

describe('border color test', () => {
  test('passing border colour test when using browser default border-style and border-width', () => {
    const computedBorderColor = '#123'
    const computedBorderStyle = 'none'
    const computedBorderWidth = '0px'
    const allowedBorderColorValues = ['does-not-matter']
    expect(border.colorTest(computedBorderColor, computedBorderStyle, computedBorderWidth, allowedBorderColorValues)).toBeTruthy()
  })

  test('passing border colour test when using browser default border-style', () => {
    const computedBorderColor = '#123'
    const computedBorderStyle = 'none'
    const computedBorderWidth = '4px'
    const allowedBorderColorValues = ['does-not-matter']
    expect(border.colorTest(computedBorderColor, computedBorderStyle, computedBorderWidth, allowedBorderColorValues)).toBeTruthy()
  })

  test('passing border colour test when using 0px border-width', () => {
    const computedBorderColor = '#123'
    const computedBorderStyle = 'dashed'
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

describe('border style test', () => {
  test('passing border style test when using browser default border-style and default border-width', () => {
    const computedBorderStyle = 'none'
    const computedBorderWidth = '0px'
    const allowedBorderStyleValues = ['does-not-matter']
    expect(border.styleTest(computedBorderStyle, computedBorderWidth, allowedBorderStyleValues)).toBeTruthy()
  })

  test('passing border style test when using browser default border-style', () => {
    const computedBorderStyle = 'none'
    const computedBorderWidth = '4px'
    const allowedBorderStyleValues = ['does-not-matter']
    expect(border.styleTest(computedBorderStyle, computedBorderWidth, allowedBorderStyleValues)).toBeTruthy()
  })

  test('passing border style test when using 0px border-width', () => {
    const computedBorderStyle = 'dashed'
    const computedBorderWidth = '0px'
    const allowedBorderStyleValues = ['does-not-matter']
    expect(border.styleTest(computedBorderStyle, computedBorderWidth, allowedBorderStyleValues)).toBeTruthy()
  })

  test('passing border style test when width applied', () => {
    const computedBorderStyle = 'solid'
    const computedBorderWidth = '4px'
    const allowedBorderStyleValues = ['solid']
    expect(border.styleTest(computedBorderStyle, computedBorderWidth, allowedBorderStyleValues)).toBeTruthy()
  })

  test('failing border style test', () => {
    const computedBorderStyle = 'solid'
    const computedBorderWidth = '4px'
    const allowedBorderStyleValues = ['dashed']
    expect(border.styleTest(computedBorderStyle, computedBorderWidth, allowedBorderStyleValues)).toBeFalsy()
  })
})

describe('border width test', () => {
  test('passing border width test when using 0px border-width and default border-style', () => {
    const computedBorderStyle = 'none'
    const computedBorderWidth = '0px'
    const allowedBorderWidthValues = ['does-not-matter']
    expect(border.widthTest(computedBorderWidth, computedBorderStyle, allowedBorderWidthValues)).toBeTruthy()
  })

  test('passing border width test when using browser default border-style', () => {
    const computedBorderStyle = 'none'
    const computedBorderWidth = '4px'
    const allowedBorderWidthValues = ['does-not-matter']
    expect(border.widthTest(computedBorderWidth, computedBorderStyle, allowedBorderWidthValues)).toBeTruthy()
  })

  test('passing border width test when using 0px border-width', () => {
    const computedBorderStyle = 'dashed'
    const computedBorderWidth = '0px'
    const allowedBorderWidthValues = ['does-not-matter']
    expect(border.widthTest(computedBorderWidth, computedBorderStyle, allowedBorderWidthValues)).toBeTruthy()
  })

  test('passing border width test when width applied', () => {
    const computedBorderStyle = 'solid'
    const computedBorderWidth = '4px'
    const allowedBorderWidthValues = ['4px']
    expect(border.widthTest(computedBorderWidth, computedBorderStyle, allowedBorderWidthValues)).toBeTruthy()
  })

  test('failing border width test', () => {
    const computedBorderStyle = 'solid'
    const computedBorderWidth = '4px'
    const allowedBorderWidthValues = ['40px']
    expect(border.widthTest(computedBorderWidth, computedBorderStyle, allowedBorderWidthValues)).toBeFalsy()
  })
})
