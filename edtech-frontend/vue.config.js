const path = require('path');

module.exports = {
  transpileDependencies: ['vuetify'],
  devServer: {
    progress: false,
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/app/assets/style/global.scss"
        `,
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        App: path.resolve(__dirname, 'src/app/'),
        Arch: path.resolve(__dirname, 'src/app/arch/'),
        Assets: path.resolve(__dirname, 'src/app/assets/'),
        Plugins: path.resolve(__dirname, 'src/plugins/'),
        '@test': path.resolve(__dirname, 'tests/unit/'),
      },
    },
  },
};
