const main = function (element) {
  let result =  ''
  if (element) {
    result = element.childNodes[0].nodeValue
  }

  return result
}

module.exports = main
