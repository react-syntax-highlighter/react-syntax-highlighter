'use strict'
var refractorJson = require('./json.js')
module.exports = jsonp
jsonp.displayName = 'jsonp'
jsonp.aliases = []
function jsonp(Prism) {
  Prism.register(refractorJson)
  Prism.languages.jsonp = Prism.languages.extend('json', {
    punctuation: /[{}[\]();,.]/
  })
  Prism.languages.insertBefore('jsonp', 'punctuation', {
    function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/
  })
}
