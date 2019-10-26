const configValidator = require('./config-validator.js')

describe('configValidator', () => {
  test('validator fails for disallowed properties', () => {
    const config = {
      propertyValues: {
        abc: ''
      }
    }
    expect(configValidator.check(config)).toBeFalsy()
  })

  test('validator passes with allowed units', () => {
    const config = {
      propertyValues: {
        paddingTop: ['1234px', '123px', '12px', '1px']
      }
    }
    expect(configValidator.check(config)).toBeTruthy()
  })

  test('validator fails for disallowed units', () => {
    const config = {
      propertyValues: {
        paddingTop: ['1234vh', '123px', '12px', '1px']
      }
    }
    expect(configValidator.check(config)).toBeFalsy()
  })

  test('validator passes with allowed hex colors', () => {
    const config = {
      propertyValues: {
        color: ['#000', '#000000', '#000a', '#000000aa']
      }
    }
    expect(configValidator.check(config)).toBeTruthy()
  })

  test('validator passes with allowed transparent color', () => {
    const config = {
      propertyValues: {
        color: ['transparent']
      }
    }
    expect(configValidator.check(config)).toBeTruthy()
  })

  test('validator passes with allowed rgb and rgba colors', () => {
    const config = {
      propertyValues: {
        color: ['rgb(0, 0, 0)', 'rgba(0, 0, 0, a)']
      }
    }
    expect(configValidator.check(config)).toBeTruthy()
  })

  test('validator fails for disallowed hsl colors', () => {
    const config = {
      propertyValues: {
        color: ['hsl(120, 100%, 50%)', 'hsla(120, 100%, 50%, 0.3)']
      }
    }
    expect(configValidator.check(config)).toBeFalsy()
  })

  test('validator fails for disallowed named colors', () => {
    const config = {
      propertyValues: {
        color: ['red']
      }
    }
    expect(configValidator.check(config)).toBeFalsy()
  })

  test('validator passes for outlineColor used with outlineStyle', () => {
    const config = {
      propertyValues: {
        outlineColor: ['#000000'],
        outlineStyle: ['solid']
      }
    }
    expect(configValidator.check(config)).toBeTruthy()
  })

  test('validator fails for outlineColor used without outlineStyle', () => {
    const config = {
      propertyValues: {
        outlineColor: ['red']
      }
    }
    expect(configValidator.check(config)).toBeFalsy()
  })

  test('validator passes for fontWeight defined with numbers', () => {
    const config = {
      propertyValues: {
        fontWeight: ['900']
      }
    }
    expect(configValidator.check(config)).toBeTruthy()
  })

  test('validator fails for fontWeight defined with names', () => {
    const config = {
      propertyValues: {
        fontWeight: ['bold']
      }
    }
    expect(configValidator.check(config)).toBeFalsy()
  })
})
