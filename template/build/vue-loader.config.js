var utils = require('./utils')
var isProduction = process.env.NODE_ENV === 'production'
var isServer = process.env.VUE_ENV === 'server'
module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction,
    extract: isProduction
  })
}
