var config = require('../config')
if(!config.tasks.js) return

var path            = require('path')
var pathToUrl       = require('./pathToUrl')
var webpack         = require('webpack')
var webpackManifest = require('./webpackManifest')
var BundleTracker   = require('webpack-bundle-tracker')
var ExtractText     = require('extract-text-webpack-plugin')

module.exports = function(env) {
  var jsSrc = path.resolve(config.root.src, config.tasks.js.src)
  var jsDest = path.resolve(config.root.dest, config.tasks.js.dest)
  var publicPath = pathToUrl('/static/build/', config.tasks.js.dest, '/')

  var extensions = config.tasks.js.extensions.map(function(extension) {
    return '.' + extension
  })

  var filenamePattern = '[name].js'

  var webpackConfig = {
    context: jsSrc,
    plugins: [
      new BundleTracker({filename: './webpack-stats.json'}),
      new ExtractText('[name].css')
    ],
    resolve: {
      root: jsSrc,
      extensions: [''].concat(extensions),
      alias: {
        'eventEmitter/EventEmitter': 'wolfy87-eventemitter/EventEmitter',
        'get-style-property/get-style-property': 'desandro-get-style-property/get-style-property',
        'matches-selector/matches-selector': 'desandro-matches-selector/matches-selector',
        'classie/classie': 'desandro-classie/classie'
      }
    },
    module: {
      preLoaders: [
        {
          test: /\.js$/,
          loader: 'eslint',
          exclude: /(node_modules|bower_components|vendor)/
        }
      ],
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: config.tasks.js.babel
        },
        {
          test: /\.vue$/,
          loader: 'vue'
        },
        {
          test: /\.json$/,
          loader: 'json'
        },
        {
          test: /\.(png|jpg|gif)$/,
          loader: 'url',
          query: {
            // limit for base64 inlining in bytes
            limit: 10000,
            // custom naming format if file is larger than
            // the threshold
            name: '[name].[ext]'
          }
        }
      ]
    },
    vue: {
      postcss: require('../lib/postCssProcessors'),
      loaders: {
        js: 'babel',
        css: ExtractText.extract('css')
      }
    },
    babel: config.tasks.js.babel
  }

  if(env === 'development') {
    webpackConfig.devtool = 'inline-source-map'

    // Create new entries object with webpack-hot-middleware added
    for (var key in config.tasks.js.entries) {
      var entry = config.tasks.js.entries[key]

      config.tasks.js.entries[key] = ['webpack-hot-middleware/client?&reload=true'].concat(entry)
    }

    webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin())
  }

  if(env !== 'test') {
    // Karma doesn't need entry points or output settings
    webpackConfig.entry = config.tasks.js.entries

    webpackConfig.output= {
      path: path.normalize(jsDest),
      filename: filenamePattern,
      publicPath: publicPath
    }

    if(config.tasks.js.extractSharedJs) {
      // Factor out common dependencies into a shared.js
      webpackConfig.plugins.push(
        new webpack.optimize.CommonsChunkPlugin({
          name: 'shared',
          filename: filenamePattern,
        })
      )
    }
  }

  if(env === 'production') {
    webpackConfig.plugins.push(
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.NoErrorsPlugin()
    )
  }

  return webpackConfig
}
