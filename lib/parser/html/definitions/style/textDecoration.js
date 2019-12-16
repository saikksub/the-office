function index (param) {
  let result = ''
  if (param) {
    switch (param) {
      case 'u':
        result = `text-decoration: underline`
        break
      case 'strike':
        result = `text-decoration: line-through`
        break
      default: break
    }
  }
  return result
}

module.exports = index
