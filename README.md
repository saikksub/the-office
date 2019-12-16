# Convert the office documents into JSON or HTML

the-office is an asynchronous node library to convert Office Open XML documents into JSON or HTML. The library is written by following http://officeopenxml.com specificaions.

By default, the library provides JOSN data of the selected office document.

## Support
- [x] WordprocessingML
- [ ] PresentationML
- [ ] SpreadsheetML

> Note: The library support paragraphs only. Table support is work in progress.

## Install
``` bash
npm i --save @saikksub/the-office
```

## Usage
``` javascript
const fs = require('fs')
const { word, parser } = require('@saikksub/the-office')

// Read office document
const fileData = fs.readFileSync('/Users/kksai/Documents/soundq/test.docx')

word(fileData.toString('base64'))
  .then(data => {
    const { doc, properties } = data
    const { core, app } = properties

    console.log(core, app)

    const html = parser.createHtml(data)
    console.log(html)
  })
  .catch(err => {
    console.error(err)
  })
```

## License
MIT
