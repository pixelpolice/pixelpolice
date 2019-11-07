const margin = require('./margin.js')

describe('margin test', () => {
  test('passing margin test when using browser default margin', () => {
    const computedPadding = '0px'
    const allowedPaddingValues = ['12px']
    expect(margin.test(computedPadding, allowedPaddingValues)).toBeTruthy()
  })

  test('passing px margin test', () => {
    const computedPadding = '12px'
    const allowedPaddingValues = ['12px']
    expect(margin.test(computedPadding, allowedPaddingValues)).toBeTruthy()
  })

  test('failing px margin test', () => {
    const computedPadding = '12px'
    const allowedPaddingValues = ['24px']
    expect(margin.test(computedPadding, allowedPaddingValues)).toBeFalsy()
  })
})
