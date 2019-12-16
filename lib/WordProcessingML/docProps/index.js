const { getElementByTagName } = require('../utils')
const tags = require('./tags')

const getCoreProps = function (doc) {
  return {
    title: getElementByTagName(doc, tags.TAG_TITLE, true),
    subject: getElementByTagName(doc, tags.TAG_SUBJECT, true),
    creator: getElementByTagName(doc, tags.TAG_CREATOR, true),
    lastModifiedBy: getElementByTagName(doc, tags.TAG_LAST_MODIFIED_BY, true),
    revision: getElementByTagName(doc, tags.TAG_REVISION, true),
    lastPrinted: getElementByTagName(doc, tags.TAG_LAST_PRINTED, true),
    created: getElementByTagName(doc, tags.TAG_CREATED, true),
    modified: getElementByTagName(doc, tags.TAG_MODIFIED, true),
  }
}

const getAppProps = function (doc) {
  return {
    template: getElementByTagName(doc, tags.TAG_TEMPLATE, false),
    totalTime: getElementByTagName(doc, tags.TAG_TOTAL_TIME, false),
    pages: getElementByTagName(doc, tags.TAG_PAGES, false),
    words: getElementByTagName(doc, tags.TAG_WORDS, false),
    characters: getElementByTagName(doc, tags.TAG_CHARACTERS, false),
    application: getElementByTagName(doc, tags.TAG_APPLICATION, false),
    docSecurity: getElementByTagName(doc, tags.TAG_DOC_SECURITY, false),
    lines: getElementByTagName(doc, tags.TAG_LINES, false),
    paragraphs: getElementByTagName(doc, tags.TAG_PARAGRAPHS, false),
    scaleCrop: getElementByTagName(doc, tags.TAG_SCALE_CROP, false),
    company: getElementByTagName(doc, tags.TAG_COMPANY, false),
    linksUpToDate: getElementByTagName(doc, tags.TAG_LINKS_UP_TO_DATE, false),
    charactersWithSpace: getElementByTagName(doc, tags.TAG_CHARACTERS_WITH_SPACES, false),
    sharedDoc: getElementByTagName(doc, tags.TAG_SHARED_DOC, false),
    hyperlinksChanged: getElementByTagName(doc, tags.TAG_HYPERLINKS_CHANGED, false),
    appVersion: getElementByTagName(doc, tags.TAG_APP_VERSION, false),
  }
}

module.exports = {
  getCoreProps,
  getAppProps
}
