const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
if (process.env.NODE_ENV === "production") {
    module.exports = {}
} else {
    module.exports = {
        plugins: [new BundleAnalyzerPlugin()]
    }
}