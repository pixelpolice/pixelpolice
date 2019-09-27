const configValidator = require('./config-validator.js')

describe('configValidator', () => {
  test('validator fails for disallowed properties', () => {
    config = {
      propertyValues: {
        abc: ''
      }
    }
    expect(configValidator.validate(config)).toBeFalsy()
  })

  test('validator passes with allowed units', () => {
    config = {
      propertyValues: {
        paddingTop: ['1234px', '123px', '12px', '1px']
      }
    }
    expect(configValidator.validate(config)).toBeTruthy()
  })

  test('validator fails for disallowed units', () => {
    config = {
      propertyValues: {
        paddingTop: ['1234vh', '123px', '12px', '1px']
      }
    }
    expect(configValidator.validate(config)).toBeFalsy()
  })

  test('validator passes with allowed hex colors', () => {
    config = {
      propertyValues: {
        color: ['#000', '#000000', '#000a', '#000000aa']
      }
    }
    expect(configValidator.validate(config)).toBeTruthy()
  })

  test('validator passes with allowed rgb and rgba colors', () => {
    config = {
      propertyValues: {
        color: ['rgb(0, 0, 0)', 'rgba(0, 0, 0, a)']
      }
    }
    expect(configValidator.validate(config)).toBeTruthy()
  })

  test('validator fails for disallowed hsl colors', () => {
    config = {
      propertyValues: {
        color: ['hsl(120, 100%, 50%)', 'hsla(120, 100%, 50%, 0.3)']
      }
    }
    expect(configValidator.validate(config)).toBeFalsy()
  })

  test('validator fails for disallowed named colors', () => {
    config = {
      propertyValues: {
        color: ['red']
      }
    }
    expect(configValidator.validate(config)).toBeFalsy()
  })
})
