const rPr = require('./rPr')

const main = function (element) {
  const result = {}
  if (element) {
    Object.keys(element.childNodes).forEach(key => {
      const childElement = element.childNodes[key]
      switch (childElement.nodeName) {
        case 'w:jc':
          result['jc'] = childElement.attributes.length > 0 && childElement.attributes[0].value
            ? childElement.attributes[0].value
            : null
          break
        case 'w:rPr':
          Object.assign(result, { ...rPr(childElement) })
          break
        default: break
      }
    })
  }

  return result
}

module.exports = main
