const tcPr = require('./tcPr')

const main = function (element) {
  const result = {
    style: {},
    content: []
  }
  if (element) {
    Object.keys(element.childNodes).forEach(key => {
      const childElement = element.childNodes[key]
      switch(childElement.nodeName) {
        case 'w:tcPr':
          // console.log(tcPr(childElement))
          break
        case 'w:p':
          break
        default: break
      }
    })
  }

  return result
}

module.exports = main
