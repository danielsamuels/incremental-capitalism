if(global.production) return

var browserSync       = require('browser-sync')
var gulp              = require('gulp')
var webpack           = require('webpack')
var webpackMutiConfig = require('../lib/webpack-multi-config')
var config            = require('../config')
var pathToUrl         = require('../lib/pathToUrl')

var browserSyncTask = function() {

  var webpackConfig = webpackMutiConfig('development')
  var compiler = webpack(webpackConfig)
  var proxyConfig = config.tasks.browserSync.proxy || null;

  var server = config.tasks.browserSync.server;

  server.middleware = [
    require('webpack-dev-middleware')(compiler, {
      stats: 'errors-only',
      publicPath: pathToUrl('/', webpackConfig.output.publicPath)
    }),
    require('webpack-hot-middleware')(compiler)
  ]

  browserSync.init(config.tasks.browserSync)

  gulp.watch([
    'assets/js/components/*.vue',
    'index.html'
  ], browserSync.reload)
}

gulp.task('browserSync', browserSyncTask)
module.exports = browserSyncTask
