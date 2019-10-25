const puppeteer = require('puppeteer')
const chalk = require('chalk')
const color = require('./color/color')
const padding = require('./padding/padding')
const outline = require('./outline/outline')

const urlReport = (urlTested, elementsCount, passedTestCount, failedTestCount) => {
  return `
==============================================================

  ${chalk.bgRed.black(' FAIL ')} ${urlTested}
  Number of elements tested: ${elementsCount}
  ${chalk.green(`Passed tests: ${passedTestCount}`)}
  ${chalk.red(`Failed tests: ${failedTestCount}`)}

==============================================================`
}

const elementFailedReport = (identifier, failedMessages, config) => {
  let messages = ''
  failedMessages.forEach((message) => {
    messages = messages + `${chalk.red(`
● Failed when testing ${chalk.bold(message.property)} property`)}
    - Observed: ${message.saw}
    - Expected one of: ${config.propertyValues[message.property]}
`
  })
  return `
--------------------------------------------------------------

${chalk.bgRed.black(' FAIL ')}

${chalk.red('->')} ${identifier}
${messages}`
}

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

            // console.log(node.outerHTML)

            // console.log(computedStylesTrimmed)
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
            case 'borderTopColor':
            case 'borderRightColor':
            case 'borderBottomColor':
            case 'borderLeftColor':
              result = color.test(el[property], config.propertyValues[property])
              break

            case 'backgroundColor':
              result = color.test(el[property], config.propertyValues[property], true)
              break

            case 'paddingTop':
            case 'paddingRight':
            case 'paddingBottom':
            case 'paddingLeft':
              result = padding.test(el[property], config.propertyValues[property])
              break

            case 'outlineColor':
              result = outline.colorTest(el.outlineColor, el.outlineStyle, config.propertyValues.outlineColor)
              break

            case 'outlineStyle':
              result = outline.styleTest(el.outlineStyle, config.propertyValues.outlineStyle)
              break

            default:
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
          console.log(elementFailedReport(el.identifier, failedTests, config))
        }
      })

      console.log(urlReport(url, elements.length, totalPassedTests, totalFailedTests))

      // debugger;
      // await page.click('a[target=_blank]');

      await browser.close()
    })().then(() => {
      resolve()
    })
  })
}

module.exports = {
  pixelpolice,
  urlReport,
  elementFailedReport
}
