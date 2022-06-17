const { defineConfig } = require('@vue/cli-service')
require('./config')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: []
    }
  }
}
