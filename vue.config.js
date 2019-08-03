module.exports = {
  runtimeCompiler: true,
  lintOnSave: undefined,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.153.128:8088',
      }
    }
  }
};