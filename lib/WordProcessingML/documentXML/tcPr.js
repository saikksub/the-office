const main = function (element) {
  const result = {
    style: {},
    content: []
  }
  if (element) {
    Object.keys(element.childNodes).forEach(key => {
      const childElement = element.childNodes[key]
      switch (childElement.nodeName) {
        case 'w:gridSpan':
          if (childElement.childNodes.length > 0) {
            result['gridSpan'] = {}
            Object.keys(childElement.childNodes).forEach(key => {
              switch (childElement.childNodes[key].nodeName) {
                case 'w:gridCol':
                  Object.assign(result['gridSpan'], { gridCol: {} })
                  if (childElement.attributes.length > 0) {
                    Object.keys(childElement.attributes).forEach(key2 => {
                      switch(childElement.attributes[key2].nodeName) {
                        case 'w:w':
                          Object.assign(
                            result['gridSpan']['gridCol'],
                            {
                              val: childElement.childNodes[key].attributes[key2].value || null
                            }
                          )
                          break
                        default: break
                      }
                    })
                  }
                  Object.keys()
                  break
                default: break
              }
            })
          }
          break
        case 'w:hideMark':
          result['hideMark'] = true
          break
        case 'w:noWrap':
          result['noWrap'] = true
          break
        case 'w:shd':
          if (childElement.attributes.length > 0) {
            result['shd'] = {}
            Object.keys(childElement.attributes).forEach(key => {
              switch (childElement.attributes[key].nodeName) {
                case 'w:val':
                  Object.assign(
                    result['shd'],
                    {
                      val: childElement.attributes[key].value || null
                    }
                  )
                  break
                case 'w:color':
                  Object.assign(
                    result['shd'],
                    {
                      color: childElement.attributes[key].value || null
                    }
                  )
                  break
                case 'w:fill':
                  Object.assign(
                    result['shd'],
                    {
                      fill: childElement.attributes[key].value || null
                    }
                  )
                  break
                default: break
              }
            })
          }
          break
        case 'w:tcBorders':
          break
        case 'w:tcFitText':
          break
        case 'w:tcMar':
          break
        case 'w:tcW':
          break
        case 'w:vAlign':
          break
        case 'w:vMerge':
          break
        default: break
      }
    })
  }

  return result
}

module.exports = main
