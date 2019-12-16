const rPr = require('./rPr')
const t = require('./t')

const main = function (element) {
  const result = {
    style: {},
    content: []
  }
  if (element) {
    Object.keys(element.childNodes).forEach(key => {
      const childElement = element.childNodes[key]
      switch (childElement.nodeName) {
        case 'w:rPr':
          Object.assign(result.style, { ...rPr(childElement) })
          break
        case 'w:br':
          result.content.push({
            type: 'new-line'
          })
          break
        case 'w:t':
          result.content.push({
            type: 'text',
            content: t(childElement)
          })
          // console.log('=====> ',result.content)
          break
        default: break
      }
    })
  }

  return result
}

module.exports = main
