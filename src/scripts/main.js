const puppeteer = require('puppeteer')
const color = require('./color/color')
const padding = require('./padding/padding')
const margin = require('./margin/margin')
const outline = require('./outline/outline')
const border = require('./border/border')
const font = require('./font/font')

const pixelpolice = (url, test) => {
  return new Promise((resolve, reject) => {
    const propertiesToBeTested = Object.keys(test.expectedPropertyValues)

    let totalPassedTests = 0
    let totalFailedTests = 0
    let resultData = {}
    const allFailedTests = [];

    (async () => {
      const browser = await puppeteer.launch({
        // headless: false,
        headless: true,
        defaultViewport: {
          width: test.viewport.width,
          height: test.viewport.height
        }
      })
      const page = await browser.newPage()
      await page.goto(url)

      const elements = await page.evaluate((propertiesToBeTested) => {
        const report = []
        const formatComputedStyle = (allComputedStyles, identifier) => {
          const computedStylesTrimmed = {}

          computedStylesTrimmed.identifier = identifier

          propertiesToBeTested.forEach((key) => {
            computedStylesTrimmed[key] = allComputedStyles[key]
          })

          // todo: if the required styles do not exist then they do not need to be tested - ie skip unrequired tests

          // outlineColor needs outlineStyle to be tested
          if (propertiesToBeTested.indexOf('outlineColor') !== -1) {
            computedStylesTrimmed.outlineStyle = allComputedStyles.outlineStyle
          }

          // borderColor needs borderStyle and borderWidth to be tested
          if (propertiesToBeTested.indexOf('borderTopColor') !== -1) {
            computedStylesTrimmed.borderTopStyle = allComputedStyles.borderTopStyle
            computedStylesTrimmed.borderTopWidth = allComputedStyles.borderTopWidth
          }
          if (propertiesToBeTested.indexOf('borderRightColor') !== -1) {
            computedStylesTrimmed.borderRightStyle = allComputedStyles.borderRightStyle
            computedStylesTrimmed.borderRightWidth = allComputedStyles.borderRightWidth
          }
          if (propertiesToBeTested.indexOf('borderBottomColor') !== -1) {
            computedStylesTrimmed.borderBottomStyle = allComputedStyles.borderBottomStyle
            computedStylesTrimmed.borderBottomWidth = allComputedStyles.borderBottomWidth
          }
          if (propertiesToBeTested.indexOf('borderLeftColor') !== -1) {
            computedStylesTrimmed.borderLeftStyle = allComputedStyles.borderLeftStyle
            computedStylesTrimmed.borderLeftWidth = allComputedStyles.borderLeftWidth
          }

          report.push(computedStylesTrimmed)
        }

        document.querySelectorAll('body *').forEach(function (node) {
          if (node.localName !== 'script') {
            const computedStyles = getComputedStyle(node)
            const computedStylesBefore = getComputedStyle(node, 'before')
            const computedStylesAfter = getComputedStyle(node, 'after')
            const identifier = node.outerHTML.substring(0, 400)

            formatComputedStyle(computedStyles, identifier)

            if (computedStylesBefore.content !== 'none') {
              formatComputedStyle(computedStylesBefore, `::before ${identifier}`)
            }
            if (computedStylesAfter.content !== 'none') {
              formatComputedStyle(computedStylesAfter, `::after ${identifier}`)
            }
          }
        })

        return report
      }, propertiesToBeTested)

      elements.forEach((el) => {
        const failedTests = {}
        failedTests.identifier = el.identifier
        failedTests.results = []

        propertiesToBeTested.forEach((property, i) => {
          let result = ''

          switch (property) {
            case 'color':
              result = color.test(el[property], test.expectedPropertyValues[property])
              break

            case 'backgroundColor':
              result = color.test(el[property], test.expectedPropertyValues[property], true)
              break

            case 'borderTopColor':
              result = border.colorTest(el.borderTopColor, el.borderTopStyle, el.borderTopWidth, test.expectedPropertyValues.borderTopColor)
              break

            case 'borderRightColor':
              result = border.colorTest(el.borderRightColor, el.borderRightStyle, el.borderRightWidth, test.expectedPropertyValues.borderRightColor)
              break

            case 'borderBottomColor':
              result = border.colorTest(el.borderBottomColor, el.borderBottomStyle, el.borderBottomWidth, test.expectedPropertyValues.borderBottomColor)
              break

            case 'borderLeftColor':
              result = border.colorTest(el.borderLeftColor, el.borderLeftStyle, el.borderLeftWidth, test.expectedPropertyValues.borderLeftColor)
              break

            case 'marginTop':
            case 'marginRight':
            case 'marginBottom':
            case 'marginLeft':
              result = margin.test(el[property], test.expectedPropertyValues[property])
              break

            case 'outlineColor':
              result = outline.colorTest(el.outlineColor, el.outlineStyle, test.expectedPropertyValues.outlineColor)
              break

            case 'outlineStyle':
              result = outline.styleTest(el.outlineStyle, test.expectedPropertyValues.outlineStyle)
              break

            case 'paddingTop':
            case 'paddingRight':
            case 'paddingBottom':
            case 'paddingLeft':
              result = padding.test(el[property], test.expectedPropertyValues[property])
              break

            case 'fontFamily':
              result = font.familyTest(el.fontFamily, test.expectedPropertyValues.fontFamily)
              break

            case 'fontSize':
              result = font.sizeTest(el.fontSize, test.expectedPropertyValues.fontSize)
              break

            case 'fontWeight':
              result = font.weightTest(el.fontWeight, test.expectedPropertyValues.fontWeight)
              break

            default:
              result = true
              console.error(`main js error ${property}`)
          }

          if (result) {
            totalPassedTests++
          } else {
            totalFailedTests++
            failedTests.results.push({
              property: property,
              saw: el[property]
            })
          }
        })

        if (failedTests.results.length) {
          allFailedTests.push(failedTests)
        }
      })

      await browser.close()

      // debugger;
      // await page.click('a[target=_blank]');

      resultData = {
        url: url,
        test: test,
        elementsCount: elements.length,
        totalPassedTests: totalPassedTests,
        totalFailedTests: totalFailedTests,
        failedTests: allFailedTests
      }

      return resultData
    })().then(message => {
      resolve(message)
    })
  })
}

module.exports = {
  pixelpolice
}
