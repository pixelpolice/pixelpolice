const padding = require('./padding.js')

describe('padding test', () => {
  test('passing padding test when using browser default padding', () => {
    const computedPadding = '0px'
    const allowedPaddingValues = ['12px']
    expect(padding.test(computedPadding, allowedPaddingValues)).toBeTruthy()
  })

  test('passing px padding test', () => {
    const computedPadding = '12px'
    const allowedPaddingValues = ['12px']
    expect(padding.test(computedPadding, allowedPaddingValues)).toBeTruthy()
  })

  test('failing px padding test', () => {
    const computedPadding = '12px'
    const allowedPaddingValues = ['24px']
    expect(padding.test(computedPadding, allowedPaddingValues)).toBeFalsy()
  })
})
