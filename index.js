var BannerPlugin = require('webpack/lib/BannerPlugin')

function BasicBannerWebpackPlugin () {
    var npmPkgName = process.env.npm_package_name
    var npmPkgVersion = process.env.npm_package_version

    this.banner = `${npmPkgName} v${npmPkgVersion}`
}

BasicBannerWebpackPlugin.prototype.apply = function (compiler) {
    new BannerPlugin(this.banner).apply(compiler)
}

module.exports = BasicBannerWebpackPlugin