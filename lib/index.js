'use strict'

const WordProcessingML = require('./WordProcessingML')
const parser = require('./parser')

// Word Processing ML Object
const office = { word: null }

const word = async function (base64FileData) {
  office.word = await WordProcessingML(base64FileData)
  const core = await office.word.get('WordProcessingML:docProps:core')
  const app = await office.word.get('WordProcessingML:docProps:app')
  const settings = await office.word.get('WordProcessingML:word:settings')
  const fontTable = await office.word.get('WordProcessingML:word:fontTable')
  const doc = await office.word.get('WordProcessingML:word:document')
  const files = await office.word.get('WordProcessingML:meta:files')

  return {
    properties: {
      core,
      app
    },
    doc
  }
}

module.exports = {
  word,
  parser
}
