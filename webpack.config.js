var path = require('path')
var webpack = require('webpack')

function resolve (dir) {
  return path.resolve(__dirname, '..', dir)
}
const devtool = '#inline-source-map'

const aliases = {
  'vue$': 'vue/dist/vue.esm.js',
  'bower': __dirname + '/bower_components',
  'node': __dirname + '/node_modules',
  '@app': resolve('app'),
  '@assets': resolve('app/assets'),
  '@images': resolve('app/assets/images'),
  '@javascripts': resolve('app/assets/javascripts'),
  '@stylesheets': resolve('app/assets/stylesheets'),
  '@components': resolve('app/components'),
  '@router': resolve('app/router'),
  '@views': resolve('app/views')
}

const devPlugins = [
  new ExtractTextPlugin({
    filename: '[name].bundle.css'
  })
]

module.exports = {
  entry: {
    app: ['./app/styles.js','./app/app.js']
  },
  output: {
    path: path.resolve(__dirname, './build'),
    publicPath: '/build/',
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader?indentedSyntax'
            }
          ],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader'
            }
          ],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: aliases
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: devtool,
  plugins: devPlugins
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new ExtractTextPlugin({
      filename: '[name].bundle.min.css'
    })
  ])
}
