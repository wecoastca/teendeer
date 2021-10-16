const CracoLessPlugin = require('craco-less');
const path = require('path');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#520339' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.css', '.less'],
    alias: {
      'components': path.join(__dirname, '/src/components'),
      'modules': path.join(__dirname, '/src/modules'),
      'assets': path.join(__dirname, '/src/assets'),
    },
  },
};
