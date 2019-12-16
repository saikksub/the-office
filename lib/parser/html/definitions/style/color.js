function index (param) {
  let result = ''
  if (param) {
    if (`${param}`.split('').includes('#')) {
      result = `color: ${param}`
    } else {
      result = `color: #${param}`
    }
  }

  return result
}

module.exports = index
