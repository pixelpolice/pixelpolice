const puppeteer = require('puppeteer')
const messages = require('./messages')
const color = require('./color/color')
const padding = require('./padding/padding')
const outline = require('./outline/outline')
const border = require('./border/border')
const font = require('./font/font')


const pixelpolice = (config) => {
  return new Promise((resolve, reject) => {
    const url = config.urls[0]

    const propertiesToBeTested = Object.keys(config.propertyValues)

    let totalPassedTests = 0
    let totalFailedTests = 0

    console.log(`\ntesting: ${url}`);

    (async () => {
      const browser = await puppeteer.launch({
        // headless: false,
        headless: true,
        defaultViewport: {
          width: 320,
          height: 568
        }
      })
      const page = await browser.newPage()
      await page.goto(url)

      const elements = await page.evaluate((propertiesToBeTested) => {
        const report = []

        document.querySelectorAll('body *').forEach(function (node) {
          if (node.localName !== 'script') {
            const allComputedStyles = getComputedStyle(node)
            const computedStylesTrimmed = {}

            computedStylesTrimmed.identifier = node.outerHTML.substring(0, 400)

            propertiesToBeTested.forEach((key) => {
              computedStylesTrimmed[key] = allComputedStyles[key]
            })

            // todo: if the required styles do not exist then they do not need to be tested - ie skip unrequired tests

            // outlineColor needs outlineStyle to be tested
            if (propertiesToBeTested.indexOf('outlineColor') !== -1) {
              computedStylesTrimmed['outlineStyle'] = allComputedStyles['outlineStyle']
            }

            // borderColor needs borderStyle and borderWidth to be tested
            if (propertiesToBeTested.indexOf('borderTopColor') !== -1) {
              computedStylesTrimmed['borderTopStyle'] = allComputedStyles['borderTopStyle']
              computedStylesTrimmed['borderTopWidth'] = allComputedStyles['borderTopWidth']
            }
            if (propertiesToBeTested.indexOf('borderRightColor') !== -1) {
              computedStylesTrimmed['borderRightStyle'] = allComputedStyles['borderRightStyle']
              computedStylesTrimmed['borderRightWidth'] = allComputedStyles['borderRightWidth']
            }
            if (propertiesToBeTested.indexOf('borderBottomColor') !== -1) {
              computedStylesTrimmed['borderBottomStyle'] = allComputedStyles['borderBottomStyle']
              computedStylesTrimmed['borderBottomWidth'] = allComputedStyles['borderBottomWidth']
            }
            if (propertiesToBeTested.indexOf('borderLeftColor') !== -1) {
              computedStylesTrimmed['borderLeftStyle'] = allComputedStyles['borderLeftStyle']
              computedStylesTrimmed['borderLeftWidth'] = allComputedStyles['borderLeftWidth']
            }

            report.push(computedStylesTrimmed)
          }
        })

        return report
      }, propertiesToBeTested)

      elements.forEach((el) => {
        const failedTests = []

        propertiesToBeTested.forEach((property, i) => {
          let result = ''

          switch (property) {
            case 'color':
              result = color.test(el[property], config.propertyValues[property])
              break

            case 'backgroundColor':
              result = color.test(el[property], config.propertyValues[property], true)
              break

            case 'borderTopColor':
              result = border.colorTest(el.borderTopColor, el.borderTopStyle, el.borderTopWidth, config.propertyValues.borderTopColor)
              break

            case 'borderRightColor':
              result = border.colorTest(el.borderRightColor, el.borderRightStyle, el.borderRightWidth, config.propertyValues.borderRightColor)
              break

            case 'borderBottomColor':
              result = border.colorTest(el.borderBottomColor, el.borderBottomStyle, el.borderBottomWidth, config.propertyValues.borderBottomColor)
              break

            case 'borderLeftColor':
              result = border.colorTest(el.borderLeftColor, el.borderLeftStyle, el.borderLeftWidth, config.propertyValues.borderLeftColor)
              break

            case 'paddingTop':
            case 'paddingRight':
            case 'paddingBottom':
            case 'paddingLeft':
              result = padding.test(el[property], config.propertyValues[property]);
              break

            case 'outlineColor':
              result = outline.colorTest(el.outlineColor, el.outlineStyle, config.propertyValues.outlineColor)
              break

            case 'outlineStyle':
              result = outline.styleTest(el.outlineStyle, config.propertyValues.outlineStyle)
              break

            case 'fontFamily':
              result = font.familyTest(el.fontFamily, config.propertyValues.fontFamily)
              break

            default:
              result = true
              console.error(`main js error ${property}`)
          }

          if (result) {
            totalPassedTests++
          } else {
            totalFailedTests++
            failedTests.push({
              property: property,
              saw: el[property]
            })
          }
        })

        if (failedTests.length) {
          console.log(messages.elementFailedReport(el.identifier, failedTests, config))
        }
      })

      console.log(messages.urlReport(url, elements.length, totalPassedTests, totalFailedTests))
      //
      // debugger;
      // await page.click('a[target=_blank]');

      await browser.close()
    })().then(() => {
      resolve()
    })
  })
}

module.exports = {
  pixelpolice
}
