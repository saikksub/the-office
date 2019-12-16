const main = function (element) {
  const result = {}
  if (element) {
    Object.keys(element.childNodes).forEach(key => {
      const childElement = element.childNodes[key]
      switch (childElement.nodeName) {
        case 'w:gridCol':
          if (childElement.attributes.length > 0) {
            result['gridCol'] = {}
            Object.keys(childElement.attributes).forEach(key => {
              switch(childElement.attributes[key].nodeName) {
                case 'w:w':
                  Object.assign(
                    result['gridCol'],
                    {
                      w: childElement.attributes[key].value || null
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
