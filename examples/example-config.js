const tokens = require('./design-tokens')

console.log(tokens.fonts)

module.exports = {
  urls: ['http://localhost:8080/index.html'],
  tests: [{
    viewport: {
      width: 320,
      height: 568
    },
    propertyValues: {
      backgroundColor: [tokens.color.black, tokens.color.blue, tokens.color.snow, tokens.color.oldSilver],
      color: [tokens.color.black, tokens.color.snow, tokens.color.yellow],
      paddingTop: [tokens.spacers.tiny, tokens.spacers.small, tokens.spacers.medium, tokens.spacers.large, tokens.spacers.huge],
      paddingRight: [tokens.spacers.tiny, tokens.spacers.small, tokens.spacers.medium, tokens.spacers.large, tokens.spacers.huge],
      paddingBottom: [tokens.spacers.tiny, tokens.spacers.small, tokens.spacers.medium, tokens.spacers.large, tokens.spacers.huge],
      paddingLeft: [tokens.spacers.tiny, tokens.spacers.small, tokens.spacers.medium, tokens.spacers.large, tokens.spacers.huge],
      marginTop: [tokens.spacers.tiny, tokens.spacers.small, tokens.spacers.medium, tokens.spacers.large, tokens.spacers.huge],
      marginRight: [tokens.spacers.tiny, tokens.spacers.small, tokens.spacers.medium, tokens.spacers.large, tokens.spacers.huge],
      marginBottom: [tokens.spacers.tiny, tokens.spacers.small, tokens.spacers.medium, tokens.spacers.large, tokens.spacers.huge],
      marginLeft: [tokens.spacers.tiny, tokens.spacers.small, tokens.spacers.medium, tokens.spacers.large, tokens.spacers.huge],
      fontWeight: [tokens.font.weight.regular, tokens.font.weight.bold],
      fontSize: [tokens.font.tiny, tokens.font.standard, tokens.font.medium, tokens.font.large, tokens.font.huge, tokens.font.gargantuan],
      fontFamily: [tokens.font.family.pressStart, tokens.font.family.openSans, tokens.font.family.monospace ]
    }
  },
  {
    viewport: {
      width: 1600,
      height: 1024
    },
    propertyValues: {
      backgroundColor: [tokens.color.black, tokens.color.blue, tokens.color.snow, tokens.color.oldSilver],
      color: [tokens.color.black, tokens.color.snow, tokens.color.yellow],
      paddingTop: [tokens.spacers.tiny, tokens.spacers.small, tokens.spacers.medium, tokens.spacers.large, tokens.spacers.huge],
      paddingRight: [tokens.spacers.tiny, tokens.spacers.small, tokens.spacers.medium, tokens.spacers.large, tokens.spacers.huge],
      paddingBottom: [tokens.spacers.tiny, tokens.spacers.small, tokens.spacers.medium, tokens.spacers.large, tokens.spacers.huge],
      paddingLeft: [tokens.spacers.tiny, tokens.spacers.small, tokens.spacers.medium, tokens.spacers.large, tokens.spacers.huge],
      marginTop: [tokens.spacers.tiny, tokens.spacers.small, tokens.spacers.medium, tokens.spacers.large, tokens.spacers.huge],
      marginRight: [tokens.spacers.tiny, tokens.spacers.small, tokens.spacers.medium, tokens.spacers.large, tokens.spacers.huge],
      marginBottom: [tokens.spacers.tiny, tokens.spacers.small, tokens.spacers.medium, tokens.spacers.large, tokens.spacers.huge],
      marginLeft: [tokens.spacers.tiny, tokens.spacers.small, tokens.spacers.medium, tokens.spacers.large, tokens.spacers.huge]
    }
  }]
}
