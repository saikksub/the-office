const html = require('./html')
const uuidv1 = require('uuid/v1');

function getText (param) {
  let result = ''
  if (param && Array.isArray(param)) {
    param.forEach(item => {
      if (item && item.constructor === {}.constructor) {
        if (item.type === 'new-line') {
          result += '<br />'
        } else if (item.type === 'text') {
          result += item.content
        }
      }
    })
  }

  return result
}

function getParagraphBody (param) {
  let result = []
  if (param && Array.isArray(param)) {
    param.forEach(item => {
      const { style, content } = item
      result.push(`<span style="${html.style.format(style)}">${getText(content)}</span>`)
    })
  }

  return result.join('')
}

function createHtml (word) {
  const { doc } = word
  const bodyContent = []

  if (doc && Array.isArray(doc)) {
    doc.forEach(line => {
      if (line.type === 'paragraph') {
        const { style, content } = line
        const paragraph = `<p id="${uuidv1()}" style="${html.style.format(style)}">${getParagraphBody(content)}</p>`
        bodyContent.push(paragraph)
      }
    })
  }

  return bodyContent.join('')
}

module.exports = {
  createHtml
}
