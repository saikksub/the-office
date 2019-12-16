const main = function (element, namespace) {
  let result =  {}
  if (element) {
    Object.keys(element.childNodes).forEach(key => {
      const childElement = element.childNodes[key]
      switch (childElement.nodeName) {
        case 'w:jc':
          result['jc'] = childElement.attributes.length > 0 && childElement.attributes[0].value
            ? childElement.attributes[0].value
            : null
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
        case 'w:tblBorders':
          if (childElement.childNodes.length > 0) {
            result['tblBorders'] = {}
            Object.keys(childElement.childNodes).forEach(key => {
              switch (childElement.childNodes[key].nodeName) {
                case 'w:top':
                  Object.assign(result['tblBorders'], { top: {} })
                  Object.keys(childElement.childNodes[key].attributes).forEach(key2 => {
                    switch(childElement.childNodes[key].attributes[key2].nodeName) {
                      case 'w:val':
                        Object.assign(
                          result['tblBorders']['top'],
                          {
                            val: childElement.childNodes[key].attributes[key2].value || null
                          }
                        )
                        break
                      case 'w:sz':
                        Object.assign(
                          result['tblBorders']['top'],
                          {
                            sz: childElement.childNodes[key].attributes[key2].value || null
                          }
                        )
                        break
                      case 'w:space':
                        Object.assign(
                          result['tblBorders']['top'],
                          {
                            space: childElement.childNodes[key].attributes[key2].value || null
                          }
                        )
                        break
                      case 'w:shadow':
                        Object.assign(
                          result['tblBorders']['top'],
                          {
                            shadow: childElement.childNodes[key].attributes[key2].value || null
                          }
                        )
                        break
                      case 'w:color':
                        Object.assign(
                          result['tblBorders']['top'],
                          {
                            color: childElement.childNodes[key].attributes[key2].value || null
                          }
                        )
                        break
                      default: break
                    }
                  })
                  break
                case 'w:start':
                  Object.assign(result['tblBorders'], { start: {} })
                  Object.keys(childElement.childNodes[key].attributes).forEach(key2 => {
                    switch(childElement.childNodes[key].attributes[key2].nodeName) {
                      case 'w:val':
                        Object.assign(
                          result['tblBorders']['start'],
                          {
                            val: childElement.childNodes[key].attributes[key2].value || null
                          }
                        )
                        break
                      case 'w:sz':
                        Object.assign(
                          result['tblBorders']['start'],
                          {
                            sz: childElement.childNodes[key].attributes[key2].value || null
                          }
                        )
                        break
                      case 'w:space':
                        Object.assign(
                          result['tblBorders']['start'],
                          {
                            space: childElement.childNodes[key].attributes[key2].value || null
                          }
                        )
                        break
                      case 'w:shadow':
                        Object.assign(
                          result['tblBorders']['start'],
                          {
                            shadow: childElement.childNodes[key].attributes[key2].value || null
                          }
                        )
                        break
                      case 'w:color':
                        Object.assign(
                          result['tblBorders']['start'],
                          {
                            color: childElement.childNodes[key].attributes[key2].value || null
                          }
                        )
                        break
                      default: break
                    }
                  })
                  break
                case 'w:bottom':
                  Object.assign(result['tblBorders'], { bottom: {} })
                  Object.keys(childElement.childNodes[key].attributes).forEach(key2 => {
                    switch(childElement.childNodes[key].attributes[key2].nodeName) {
                      case 'w:val':
                        Object.assign(
                          result['tblBorders']['bottom'],
                          {
                            val: childElement.childNodes[key].attributes[key2].value || null
                          }
                        )
                        break
                      case 'w:sz':
                        Object.assign(
                          result['tblBorders']['bottom'],
                          {
                            sz: childElement.childNodes[key].attributes[key2].value || null
                          }
                        )
                        break
                      case 'w:space':
                        Object.assign(
                          result['tblBorders']['bottom'],
                          {
                            space: childElement.childNodes[key].attributes[key2].value || null
                          }
                        )
                        break
                      case 'w:shadow':
                        Object.assign(
                          result['tblBorders']['bottom'],
                          {
                            shadow: childElement.childNodes[key].attributes[key2].value || null
                          }
                        )
                        break
                      case 'w:color':
                        Object.assign(
                          result['tblBorders']['bottom'],
                          {
                            color: childElement.childNodes[key].attributes[key2].value || null
                          }
                        )
                        break
                      default: break
                    }
                  })
                  break
                case 'w:end':
                  Object.assign(result['tblBorders'], { end: {} })
                  Object.keys(childElement.childNodes[key].attributes).forEach(key2 => {
                    switch(childElement.childNodes[key].attributes[key2].nodeName) {
                      case 'w:val':
                        Object.assign(
                          result['tblBorders']['end'],
                          {
                            val: childElement.childNodes[key].attributes[key2].value || null
                          }
                        )
                        break
                      case 'w:sz':
                        Object.assign(
                          result['tblBorders']['end'],
                          {
                            sz: childElement.childNodes[key].attributes[key2].value || null
                          }
                        )
                        break
                      case 'w:space':
                        Object.assign(
                          result['tblBorders']['end'],
                          {
                            space: childElement.childNodes[key].attributes[key2].value || null
                          }
                        )
                        break
                      case 'w:shadow':
                        Object.assign(
                          result['tblBorders']['end'],
                          {
                            shadow: childElement.childNodes[key].attributes[key2].value || null
                          }
                        )
                        break
                      case 'w:color':
                        Object.assign(
                          result['tblBorders']['end'],
                          {
                            color: childElement.childNodes[key].attributes[key2].value || null
                          }
                        )
                        break
                      default: break
                    }
                  })
                  break
                case 'w:insideH':
                  Object.assign(result['tblBorders'], { insideH: {} })
                  Object.keys(childElement.childNodes[key].attributes).forEach(key2 => {
                    switch(childElement.childNodes[key].attributes[key2].nodeName) {
                      case 'w:val':
                        Object.assign(
                          result['tblBorders']['insideH'],
                          {
                            val: childElement.childNodes[key].attributes[key2].value || null
                          }
                        )
                        break
                      case 'w:sz':
                        Object.assign(
                          result['tblBorders']['insideH'],
                          {
                            sz: childElement.childNodes[key].attributes[key2].value || null
                          }
                        )
                        break
                      case 'w:space':
                        Object.assign(
                          result['tblBorders']['insideH'],
                          {
                            space: childElement.childNodes[key].attributes[key2].value || null
                          }
                        )
                        break
                      case 'w:shadow':
                        Object.assign(
                          result['tblBorders']['insideH'],
                          {
                            shadow: childElement.childNodes[key].attributes[key2].value || null
                          }
                        )
                        break
                      case 'w:color':
                        Object.assign(
                          result['tblBorders']['insideH'],
                          {
                            color: childElement.childNodes[key].attributes[key2].value || null
                          }
                        )
                        break
                      default: break
                    }
                  })
                  break
                case 'w:insideV':
                  Object.assign(result['tblBorders'], { insideV: {} })
                  Object.keys(childElement.childNodes[key].attributes).forEach(key2 => {
                    switch(childElement.childNodes[key].attributes[key2].nodeName) {
                      case 'w:val':
                        Object.assign(
                          result['tblBorders']['insideV'],
                          {
                            val: childElement.childNodes[key].attributes[key2].value || null
                          }
                        )
                        break
                      case 'w:sz':
                        Object.assign(
                          result['tblBorders']['insideV'],
                          {
                            size: childElement.childNodes[key].attributes[key2].value || null
                          }
                        )
                        break
                      case 'w:space':
                        Object.assign(
                          result['tblBorders']['insideV'],
                          {
                            space: childElement.childNodes[key].attributes[key2].value || null
                          }
                        )
                        break
                      case 'w:shadow':
                        Object.assign(
                          result['tblBorders']['insideV'],
                          {
                            shadow: childElement.childNodes[key].attributes[key2].value || null
                          }
                        )
                        break
                      case 'w:color':
                        Object.assign(
                          result['tblBorders']['insideV'],
                          {
                            color: childElement.childNodes[key].attributes[key2].value || null
                          }
                        )
                        break
                      default: break
                    }
                  })
                  break
                default: break
              }
            })
          }
          break
        case 'w:tblCaption':
          if (childElement.attributes.length > 0) {
            result['tblCaption'] = {}
            Object.keys(childElement.attributes).forEach(key => {
              switch (childElement.attributes[key].nodeName) {
                case 'w:val':
                  Object.assign(
                    result['tblCaption'],
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
        case 'w:tblCellMar':
          if (childElement.childNodes.length > 0) {
            result['tblCellMar'] = {}
            Object.keys(childElement.childNodes).forEach(key => {
              switch (childElement.childNodes[key].nodeName) {
                case 'w:top':
                  Object.assign(result['tblCellMar'], { top: {} })
                  Object.keys(childElement.childNodes[key].attributes).forEach(key2 => {
                    switch(childElement.childNodes[key].attributes[key2].nodeName) {
                      case 'w:w':
                        Object.assign(
                          result['tblCellMar']['top'],
                          {
                            w: childElement.childNodes[key].attributes[key2].value || null
                          }
                        )
                        break
                      case 'w:type':
                        Object.assign(
                          result['tblCellMar']['top'],
                          {
                            type: childElement.childNodes[key].attributes[key2].value || null
                          }
                        )
                        break
                      default: break
                    }
                  })
                  break
                case 'w:right':
                  Object.assign(result['tblCellMar'], { right: {} })
                  Object.keys(childElement.childNodes[key].attributes).forEach(key2 => {
                    switch(childElement.childNodes[key].attributes[key2].nodeName) {
                      case 'w:w':
                        Object.assign(
                          result['tblCellMar']['right'],
                          {
                            w: childElement.childNodes[key].attributes[key2].value || null
                          }
                        )
                        break
                      case 'w:type':
                        Object.assign(
                          result['tblCellMar']['right'],
                          {
                            type: childElement.childNodes[key].attributes[key2].value || null
                          }
                        )
                        break
                      default: break
                    }
                  })
                  break
                case 'w:bottom':
                  Object.assign(result['tblCellMar'], { bottom: {} })
                  Object.keys(childElement.childNodes[key].attributes).forEach(key2 => {
                    switch(childElement.childNodes[key].attributes[key2].nodeName) {
                      case 'w:w':
                        Object.assign(
                          result['tblCellMar']['bottom'],
                          {
                            w: childElement.childNodes[key].attributes[key2].value || null
                          }
                        )
                        break
                      case 'w:type':
                        Object.assign(
                          result['tblCellMar']['bottom'],
                          {
                            type: childElement.childNodes[key].attributes[key2].value || null
                          }
                        )
                        break
                      default: break
                    }
                  })
                  break
                case 'w:left':
                  Object.assign(result['tblCellMar'], { left: {} })
                  Object.keys(childElement.childNodes[key].attributes).forEach(key2 => {
                    switch(childElement.childNodes[key].attributes[key2].nodeName) {
                      case 'w:w':
                        Object.assign(
                          result['tblCellMar']['left'],
                          {
                            w: childElement.childNodes[key].attributes[key2].value || null
                          }
                        )
                        break
                      case 'w:type':
                        Object.assign(
                          result['tblCellMar']['left'],
                          {
                            type: childElement.childNodes[key].attributes[key2].value || null
                          }
                        )
                        break
                      default: break
                    }
                  })
                  break
                default: break
              }
            })
          }
          break
        case 'w:tblCellSpacing':
          if (childElement.attributes.length > 0) {
            result['tblCellSpacing'] = {}
            Object.keys(childElement.attributes).forEach(key => {
              switch (childElement.attributes[key].nodeName) {
                case 'w:w':
                  Object.assign(
                    result['tblCellSpacing'],
                    {
                      w: childElement.attributes[key].value || null
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
        case 'w:tblInd':
          // TODO
          break
        case 'w:tblLayout':
          // TODO
          break
        case 'w:tblLook':
          // TODO
          break
        case 'w:tblOverlap':
          // TODO
          break
        case 'w:tblpPr':
          // TODO
          break
        case 'w:tblStyle':
          // TODO
          break
        case 'w:tblStyleColBandSize':
          // TODO
          break
        case 'w:tblStyleRowBandSize':
          // TODO
          break
        case 'w:tblW':
          if (childElement.attributes.length > 0) {
            result['tblW'] = {}
            Object.keys(childElement.attributes).forEach(key => {
              switch (childElement.attributes[key].nodeName) {
                case 'w:w':
                  Object.assign(
                    result['tblW'],
                    {
                      w: childElement.attributes[key].value || null
                    }
                  )
                  break
                case 'w:type':
                  Object.assign(
                    result['tblW'],
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
        default: break
      }
    })
  }

  return result
}

module.exports = main
