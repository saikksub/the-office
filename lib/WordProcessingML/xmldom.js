var DOMParserXML = require('xmldom').DOMParser;

const main = function (xml) {
  return new DOMParserXML().parseFromString(xml.toString('utf8'), 'text/xml')
}

module.exports = main
