const JSZip = require('../jszip/jszip.min')
const xmlDom = require('./xmldom')
const settings = require('./settings')
const docProps = require('./docProps')
const documentXML = require('./documentXML')
const zip = new JSZip()

const WordProcessingML = function (data) {
  const self = this

  self.get = function (cmd) {
    return new Promise(resolve => {
      switch (cmd) {
        case 'WordProcessingML:docProps:core':
          if (!this.content.files['docProps/core.xml']) {
            resolve({})
          }
          this.content.files['docProps/core.xml'].async('binarystring')
            .then(content => {
              const doc = xmlDom(content.toString('utf8'))
              resolve(docProps.getCoreProps(doc))
            })
          break
        case 'WordProcessingML:docProps:app':
          if (!this.content.files['docProps/app.xml']) {
            resolve({})
          }
          this.content.files['docProps/app.xml'].async('binarystring')
            .then(content => {
              const doc = xmlDom(content.toString('utf8'))
              resolve(docProps.getAppProps(doc))
            })
          break
        case 'WordProcessingML:word:settings':
          if (!this.content.files['word/settings.xml']) {
            resolve({})
          }
          this.content.files['word/settings.xml'].async('binarystring')
            .then(content => {
              const doc = xmlDom(content.toString('utf8'))
              resolve(settings.getSettings(doc))
            })
          break
        case 'WordProcessingML:word:document':
          if (!this.content.files['word/document.xml']) {
            resolve({})
          }
          this.content.files['word/document.xml'].async('binarystring')
            .then(content => {
              const doc = xmlDom(content.toString('utf8'))
              resolve(documentXML.getDocument(doc))
            })
          break
        case 'WordProcessingML:meta:files':
          resolve(Object.keys(this.content.files))
          break
        default:
          resolve({})
          break
      }
    })
  }
  

  return new Promise((resolve, reject) => {
    zip.loadAsync(data, { base64: true })
      .then(content => {
        self.content = content
        resolve(self)
      })
  })
}

module.exports = WordProcessingML
