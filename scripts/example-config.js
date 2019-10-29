const tokens = require('./design-tokens')

module.exports = {
  urls: ['https://www.giffgaff.com/', 'https://www.giffgaff.com/blog'],
  tests: [{
    viewport: {
      width: 320,
      height: 568
    },
    propertyValues: {
      backgroundColor: ['#000000', '#FFFFFF', '#EB5F8E', '#72B72A', '#35ADCE', '#FCC31E', '#AE0D21', '#007349', '#00528A', '#EA5B25', '#666666', '#D0D0D0', '#F5F5F5', '#ECECEC', 'transparent'],
      borderTopColor: ['#000000', '#FFFFFF'],
      borderRightColor: ['#000000', '#FFFFFF'],
      borderLeftColor: ['#000000', '#FFFFFF'],
      borderBottomColor: ['#000000', '#FFFFFF'],
      color: ['#000000', '#FFFFFF', '#EB5F8E', '#72B72A', '#35ADCE', '#FCC31E', '#AE0D21', '#007349', '#00528A', '#EA5B25', '#666666', '#D0D0D0', '#F5F5F5', '#ECECEC', 'transparent'],
      paddingTop: [tokens.spacers.fine, tokens.spacers.tiny, tokens.spacers.small, tokens.spacers.medium, tokens.spacers.large],
      paddingRight: [tokens.spacers.fine, tokens.spacers.tiny, tokens.spacers.small, tokens.spacers.medium, tokens.spacers.large],
      paddingLeft: [tokens.spacers.fine, tokens.spacers.tiny, tokens.spacers.small, tokens.spacers.medium, tokens.spacers.large],
      paddingBottom: [tokens.spacers.fine, tokens.spacers.tiny, tokens.spacers.small, tokens.spacers.medium, tokens.spacers.large],
      fontWeight: ['400', '700', '900'],
      fontSize: ['40px', '32px', '24px', '20px', '16px', '12px']
    }
  },
  {
    viewport: {
      width: 768,
      height: 1024
    },
    propertyValues: {
      backgroundColor: ['#000000', '#FFFFFF', '#EB5F8E', '#72B72A', '#35ADCE', '#FCC31E', '#AE0D21', '#007349', '#00528A', '#EA5B25', '#666666', '#D0D0D0', '#F5F5F5', '#ECECEC', 'transparent'],
      borderTopColor: ['#000000', '#FFFFFF'],
      borderRightColor: ['#000000', '#FFFFFF'],
      borderLeftColor: ['#000000', '#FFFFFF'],
      borderBottomColor: ['#000000', '#FFFFFF'],
      color: ['#000000', '#FFFFFF', '#EB5F8E', '#72B72A', '#35ADCE', '#FCC31E', '#AE0D21', '#007349', '#00528A', '#EA5B25', '#666666', '#D0D0D0', '#F5F5F5', '#ECECEC', 'transparent'],
      paddingTop: [tokens.spacers.fine, tokens.spacers.tiny, tokens.spacers.small, tokens.spacers.medium, tokens.spacers.large],
      paddingRight: [tokens.spacers.fine, tokens.spacers.tiny, tokens.spacers.small, tokens.spacers.medium, tokens.spacers.large],
      paddingLeft: [tokens.spacers.fine, tokens.spacers.tiny, tokens.spacers.small, tokens.spacers.medium, tokens.spacers.large],
      paddingBottom: [tokens.spacers.fine, tokens.spacers.tiny, tokens.spacers.small, tokens.spacers.medium, tokens.spacers.large],
      fontWeight: ['400', '700', '900'],
      fontSize: ['82px', '54px', '36px', '24px', '20px', '16px', '12px']
    }
  }]
}
