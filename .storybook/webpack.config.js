const path = require('path');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [require.resolve('babel-preset-react-app')],
        },
      },
      {
        loader: require.resolve('awesome-typescript-loader'),
        options:{
          configFileName: path.resolve(__dirname, '../tsconfig.json')
        }
      },
    ],
  });

  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};