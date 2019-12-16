const getListNameSpaceURI = function (doc) {
  const result = []
  if (doc) {
    Object.keys(doc.documentElement.attributes).forEach(key => {
      if (
        doc.documentElement.attributes[key] &&
        doc.documentElement.attributes[key].name &&
        doc.documentElement.attributes[key].name.split('xmlns').length > 1
      ) {
        result.push(doc.documentElement.attributes[key].value)
      }
    })
  }

  return result
}

const getElementByTagName = function (doc, tagName, namespace) {
  let element = null
  let result = ''

  const listNameSpaceURI = namespace ? getListNameSpaceURI(doc) : []

  if (doc) {
    if (listNameSpaceURI.length > 0) {
      for (let index = 0; index < listNameSpaceURI.length - 1; index++) {
        let childElement = doc.documentElement.getElementsByTagNameNS(
          listNameSpaceURI[index],
          tagName
        )
        if (childElement.length > 0) {
          element = childElement
          break
        }
      }
    } else {
      element = doc.documentElement.getElementsByTagName(tagName)
    }
  }

  if (element && element.length > 0) {
    // result = `${tagName}:${element[0].textContent}`
    result = element[0].textContent
  }

  return result
}

module.exports = {
  getElementByTagName,
  getListNameSpaceURI
}
