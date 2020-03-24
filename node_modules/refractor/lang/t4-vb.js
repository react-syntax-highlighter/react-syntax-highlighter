'use strict'
var refractorT4Templating = require('./t4-templating.js')
module.exports = t4Vb
t4Vb.displayName = 't4Vb'
t4Vb.aliases = []
function t4Vb(Prism) {
  Prism.register(refractorT4Templating)
  Prism.languages['t4-vb'] = Prism.languages['t4-templating'].createT4(
    'visual-basic'
  )
}
