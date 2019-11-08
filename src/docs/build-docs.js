const fs = require('fs')
const path = require('path')
const pug = require('pug');

const properties = require('../data/properties')

const compiledFunction = pug.compileFile(path.resolve(__dirname, 'index.pug'));

const data = {
  properties: properties
}


fs.writeFile('docs/' + 'index.html', compiledFunction(data), err => {
  if (err) throw err
  console.log('The page has been saved!')
})
