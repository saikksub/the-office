const pPr = require('./pPr')
const r = require('./r')
const tblPr = require('./tblPr')
const tblGrid = require('./tblGrid')
const tr = require('./tr')
const { getListNameSpaceURI } = require('../utils')

const getDocument = function (doc) {
  let result = []
  if (doc) {
    // Get all xml namespaces
    const namespaces = getListNameSpaceURI(doc)
    let body = null
    let activeNamespaceURI = null
    // Get document body
    if (namespaces.length > 0) {
      for (let index = 0; index < namespaces.length; index++) {
        let childElement = doc.documentElement.getElementsByTagNameNS(
          namespaces[index],
          'body'
        )

        if (childElement && childElement.length > 0) {
          activeNamespaceURI = namespaces[index]
          body = childElement
          break
        }
      }
    } else {
      body = doc.documentElement.getElementsByTagName('body')
    }
    
    if (body && body.length > 0) {
      // Get all child nodes inside body
      const childNodes = body[0].childNodes
      Object.keys(childNodes).forEach(key => {
        const childItem = childNodes[key]
        let entryItem = {
          type: '',
          style: {},
          content: []
        }
        switch (childItem.nodeName) {
          case 'w:p':
            entryItem.type = 'paragraph'
            Object.keys(childItem.childNodes).forEach(childItemKey => {
              const childElement = childItem.childNodes[childItemKey]
              switch (childElement.nodeName) {
                case 'w:pPr':
                  Object.assign(entryItem.style, { ...pPr(childElement) })
                  break
                case 'w:r':
                  const runContent = r(childElement)
                  if (runContent && runContent.content.length > 0) {
                    entryItem.content.push(runContent)
                  }
                  break
                default: break
              }
            })
            if (entryItem.content.length > 0) {
              result.push(entryItem)
            }
            break
          case 'w:tbl':
            /* entryItem.type = 'table'
            Object.keys(childItem.childNodes).forEach(childItemKey => {
              const childElement = childItem.childNodes[childItemKey]
              switch (childElement.nodeName) {
                case 'w:tblGrid':
                  Object.assign(entryItem.style, { grid: { ...tblGrid(childElement) } })
                  break
                case 'w:tblPr':
                  Object.assign(entryItem.style, { ...tblPr(childElement) })
                  break
                case 'w:tr':
                  const rowContent = tr(childElement)
                  // console.log(rowContent)
                  break
                default: break
              }
            }) */
            break
          default: break;
        }
      })
    }
  }

  return result
}

module.exports = {
  getDocument
}
