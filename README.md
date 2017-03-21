# basic-banner-webpack-plugin

Append the name and version of a package before the bundle.

This package just instance [banner-webpack-plugin](https://github.com/lcxfs1991/banner-webpack-plugin) with a minimal config.

## Install
```
npm i -D basic-banner-webpack-plugin
```

## Usage
```js
const BasicBannerWebpackPlugin = require('basic-banner-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './dist/bundle.js'
  },
  plugins: [
    new BasicBannerWebpackPlugin()
  ]
}
```

## Demo
```js
/*! ramda v1.0.0 */
(function(){"use strict";var t={"@@functional/placeholder":!0},n=function(t,n){}})()
```
