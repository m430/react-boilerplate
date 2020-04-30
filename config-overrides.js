const path = require('path');
const WebpackBar = require('webpackbar');
const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
  addWebpackPlugin
} = require('customize-cra');

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src')
  }),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    lessOptions: {
      strictMath: true,
    },
  }),
  addWebpackPlugin(
    new WebpackBar()
  )
)