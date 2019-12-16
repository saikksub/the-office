function index (param) {
  let result = ''
  if (param) {
    switch (param) {
      case 'b':
        result = `font-weight: bold`
        break
      case 'i':
        result = `font-weight: italic`
        break
      default: break
    }
  }

  return result
}

module.exports = index
