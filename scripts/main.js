const puppeteer = require('puppeteer')
const config = require('../test/example-config')
const configValidator = require('./config-validator.js')
const color = require('./color/color')
const padding = require('./padding/padding')
// const getMatchedCSSRules = require('./getMatchedCSSRules');

const failedTests = []

if (configValidator.validate(config) !== true) {
  throw new Error('Invalid config')
}

// const propertyValuesToBeTested = ['color', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft']

const colorConfigRGBA = color.configToRGBA(config.propertyValues.color);
const backgroundColorConfigRGBA = color.configToRGBA(config.propertyValues.backgroundColor);
const borderTopColorConfigRGBA = color.configToRGBA(config.propertyValues.borderTopColor);

(async () => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await page.goto('http://localhost:8080/test.html')
  // await page.goto('https://www.giffgaff.com/spread')
  // await page.goto('https://giffgaff.com/blog');
  // await page.goto('https://giffgaff.com/help');
  // await page.goto('https://giffgaff.com');

  // Get the "viewport" of the page, as reported by the page.
  const elements = await page.evaluate(() => {
    const report = []

    document.querySelectorAll('body *').forEach(function (node) {
      const identifierId = node.id.length !== 0 ? `#${node.id}` : ''
      const identifierClassList = node.classList.length !== 0 ? `.${node.classList.value.replace(' ', '.')}` : ''
      const allComputedStyles = getComputedStyle(node)

      const computedStyleTrimmed = {
        identifier: node.localName + identifierId + identifierClassList,
        backgroundColor: allComputedStyles.backgroundColor,
        borderTopColor: allComputedStyles.borderTopColor,
        color: allComputedStyles.color,
        paddingTop: allComputedStyles.paddingTop,
        paddingRight: allComputedStyles.paddingRight,
        paddingBottom: allComputedStyles.paddingBottom,
        paddingLeft: allComputedStyles.paddingLeft
      }

      // console.log(propertyValuesToBeTested[0])

      // propertyValuesToBeTested.forEach((value) => {
      // console.log(value)
      // computedStyleTrimmed[value] = allComputedStyles[value]
      // })

      report.push(computedStyleTrimmed)
    })

    return report
  })

  elements.forEach((el) => {
    console.log(el.identifier)

    const colorResult = color.test(el.color, colorConfigRGBA)
    const backgroundColorResult = color.test(el.backgroundColor, backgroundColorConfigRGBA)
    const borderColorResult = color.test(el.borderTopColor, borderTopColorConfigRGBA)
    const paddingResult = padding.test(el.paddingTop, config.propertyValues.paddingTop)

    console.log(`\n - Color test passed = ${colorResult}`)

    if (borderColorResult === false) {
      failedTests.push(`${el.identifier} - borderColorResult test failed`)
    }
    if (colorResult === false) {
      failedTests.push(`${el.identifier} - Color test failed`)
    }
    if (paddingResult === false) {
      failedTests.push(`${el.identifier} - Padding test failed`)
    }

    // console.log(colorResult);

    console.log('****************')
  })

  console.log('\n\n\n #####################')
  console.log(failedTests)
  console.log('#####################')

  //   debugger;
  // await page.click('a[target=_blank]');

  await browser.close()
})()
