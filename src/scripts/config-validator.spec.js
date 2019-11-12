const configValidator = require('./config-validator.js')

describe('configValidator', () => {
  test('validator fails for disallowed properties', () => {
    const config = {
      tests: [{
        expectedPropertyValues: {
          abc: ''
        }
      }]
    }
    expect(configValidator.check(config)).toBeFalsy()
  })

  test('validator passes with allowed units', () => {
    const config = {
      tests: [{
        expectedPropertyValues: {
          paddingTop: ['1234px', '123px', '12px', '1px']
        }
      }]
    }
    expect(configValidator.check(config)).toBeTruthy()
  })

  test('validator fails for disallowed units', () => {
    const config = {
      tests: [{
        expectedPropertyValues: {
          paddingTop: ['1234vh', '123px', '12px', '1px']
        }
      }]
    }
    expect(configValidator.check(config)).toBeFalsy()
  })

  test('validator passes with allowed hex colors', () => {
    const config = {
      tests: [{
        expectedPropertyValues: {
          color: ['#000', '#000000', '#000a', '#000000aa']
        }
      }]
    }
    expect(configValidator.check(config)).toBeTruthy()
  })

  test('validator passes with allowed transparent color', () => {
    const config = {
      tests: [{
        expectedPropertyValues: {
          color: ['transparent']
        }
      }]
    }
    expect(configValidator.check(config)).toBeTruthy()
  })

  test('validator passes with allowed rgb and rgba colors', () => {
    const config = {
      tests: [{
        expectedPropertyValues: {
          color: ['rgb(0, 0, 0)', 'rgba(0, 0, 0, a)']
        }
      }]
    }
    expect(configValidator.check(config)).toBeTruthy()
  })

  test('validator fails for allowed hsl and hsla colors', () => {
    const config = {
      tests: [{
        expectedPropertyValues: {
          color: ['hsl(120, 100%, 50%)', 'hsla(120, 100%, 50%, 0.3)']
        }
      }]
    }
    expect(configValidator.check(config)).toBeTruthy()
  })

  test('validator fails for disallowed named colors', () => {
    const config = {
      tests: [{
        expectedPropertyValues: {
          color: ['red']
        }
      }]
    }
    expect(configValidator.check(config)).toBeFalsy()
  })

  test('validator passes for outlineColor used with outlineStyle', () => {
    const config = {
      tests: [{
        expectedPropertyValues: {
          outlineColor: ['#000000'],
          outlineStyle: ['solid']
        }
      }]
    }
    expect(configValidator.check(config)).toBeTruthy()
  })

  test('validator fails for outlineColor used without outlineStyle', () => {
    const config = {
      tests: [{
        expectedPropertyValues: {
          outlineColor: ['red']
        }
      }]
    }
    expect(configValidator.check(config)).toBeFalsy()
  })

  test('validator passes for fontWeight defined with numbers', () => {
    const config = {
      tests: [{
        expectedPropertyValues: {
          fontWeight: ['900']
        }
      }]
    }
    expect(configValidator.check(config)).toBeTruthy()
  })

  test('validator fails for fontWeight defined with names', () => {
    const config = {
      tests: [{
        expectedPropertyValues: {
          fontWeight: ['bold']
        }
      }]
    }
    expect(configValidator.check(config)).toBeFalsy()
  })
})
