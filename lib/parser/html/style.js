'use strict'

const definitions = require('./definitions')

const lookup = [
  { name: 'sz', callback: definitions.style.fontSize },
  { name: 'color', callback: definitions.style.color },
  { name: 'jc', callback: definitions.style.textAlign },
  { name: 'b', callback: definitions.style.fontWeight },
  { name: 'i', callback: definitions.style.fontWeight },
  { name: 'u', callback: definitions.style.textDocoration },
  { name: 'strike', callback: definitions.style.textDocoration }
]

function format (styleObj) {
  const result = []
  if (styleObj && styleObj.constructor === {}.constructor) {
    // console.log(Object.keys(styleObj))
    Object.keys(styleObj).forEach(name => {
      const ti = lookup.findIndex(x => x.name === name)
      if (ti > -1) {
        const value = lookup[ti].callback(styleObj[name])
        if (value) {
          result.push(value)
        }
      }
    })
  }

  result.push('')
  return result.join(';')
}

module.exports = {
  format
}
