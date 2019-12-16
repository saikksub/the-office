const rPr = require('./rPr')

const main = function (element) {
  const result = {}
  if (element) {
    Object.keys(element.childNodes).forEach(key => {
      const childElement = element.childNodes[key]
      switch (childElement.nodeName) {
        case 'w:tblCellSpacing':
          if (childElement.attributes.length > 0) {
            result['tblCellSpacing'] = {}
            Object.keys(childElement.attributes).forEach(key => {
              switch(childElement.attributes[key].nodeName) {
                case 'w:w':
                  Object.assign(
                    result['tblCellSpacing'],
                    {
                      width: childElement.attributes[key].value || null
                    }
                  )
                  break
                case 'w:type':
                  Object.assign(
                    result['tblCellSpacing'],
                    {
                      type: childElement.attributes[key].value || null
                    }
                  )
                  break
                default: break
              }
            })
          }
          break
        case 'w:jc':
          if (childElement.attributes.length > 0) {
            result['jc'] = {}
            Object.keys(childElement.attributes).forEach(key => {
              switch(childElement.attributes[key].nodeName) {
                case 'w:val':
                  Object.assign(
                    result['jc'],
                    {
                      val: childElement.attributes[key].value || null
                    }
                  )
                  break
                default: break
              }
            })
          }
          break
        default: break
      }
    })
  }

  return result
}

module.exports = main
