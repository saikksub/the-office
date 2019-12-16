const main = function (element) {
    const result = {}
    if (element) {
      Object.keys(element.childNodes).forEach(key => {
        const childElement = element.childNodes[key]
        switch (childElement.nodeName) {
          case 'w:b':
            result['b'] = 'b'
            break
          case 'w:i':
            result['i'] = 'i'
            break
          case 'w:caps':
            result['caps'] = childElement.attributes.length > 0 && childElement.attributes[0].value
            ? childElement.attributes[0].value
            : false
            break
          case 'w:color':
            result['color'] =  childElement.attributes.length > 0 && childElement.attributes[0].value
            ? `#${childElement.attributes[0].value}`
            : null
            break
          case 'w:dstrike':
            result['dstrike'] = childElement.attributes.length > 0 && childElement.attributes[0].value
              ? childElement.attributes[0].value
              : false
            break
          case 'w:emboss':
            result['emboss'] = childElement.attributes.length > 0 && childElement.attributes[0].value
              ? childElement.attributes[0].value
              : false
            break
          case 'w:imprint':
            result['imprint'] = childElement.attributes.length > 0 && childElement.attributes[0].value
              ? childElement.attributes[0].value
              : false
            break
          case 'w:outline':
            result['outline'] = childElement.attributes.length > 0 && childElement.attributes[0].value
              ? childElement.attributes[0].value
              : false
            break
          case 'w:shadow':
            result['shadow'] = childElement.attributes.length > 0 && childElement.attributes[0].value
              ? childElement.attributes[0].value
              : false
            break
          case 'w:smallCaps':
            result['smallCaps'] = childElement.attributes.length > 0 && childElement.attributes[0].value
              ? childElement.attributes[0].value
              : false
            break
          case 'w:strike':
            result['strike'] = childElement.attributes.length > 0 && childElement.attributes[0].value
              ? 'strike'
              : false
            break
          case 'w:sz':
            result['sz'] = childElement.attributes.length > 0 && childElement.attributes[0].value
              ? childElement.attributes[0].value
              : null
            break
          case 'w:u':
            result['u'] = childElement.attributes.length > 0 && childElement.attributes[0].value
              ? 'u'
              : null
            break
          default: break
        }
      })
    }
  
    return result
  }
  
  module.exports = main
  