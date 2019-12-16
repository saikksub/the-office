function index (param) {
  let result = ''
  if (param) {
    if (param === 'both' || param === 'distribute') {
      result = `text-align: justify`
    } else {
      result = `text-align: ${param}`
    }
  }

  return result
}

module.exports = index
