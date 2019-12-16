'use strict'

function halfPoint2Pixel (param) {
  return ((1/144) * param) * 96
}

function index (param) {
  let result = ''
  const value = parseInt(param)
  if (value !== NaN) {
    result = `font-size: ${halfPoint2Pixel(param)}px`
  }

  return result
}

module.exports = index
