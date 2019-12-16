const trPr = require('./trPr')
const tc = require('./tc')

const main = function (element) {
  let result =  {
    style: {},
    content: []
  }
  if (element) {
    Object.keys(element.childNodes).forEach(key => {
      const childElement = element.childNodes[key]
      switch (childElement.nodeName) {
        case 'w:trPr':
          Object.assign(result.style, { ...trPr(childElement) })
          break
        case 'w:tc':
          tc(childElement)
          break
        default: break
      }
    })
  }

  return result
}

module.exports = main
