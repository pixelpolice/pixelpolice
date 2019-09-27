const padding = require('./padding.js')

describe('padding test', () => {
  test('passing padding test', () => {
    computedPadding = '12px'
    allowedPaddingValues = ['12px']
    expect(padding.test(computedPadding, allowedPaddingValues)).toBeTruthy()
  })

  test('failing padding test', () => {
    computedPadding = '12px'
    allowedPaddingValues = ['24px']
    expect(padding.test(computedPadding, allowedPaddingValues)).toBeFalsy()
  })
})
