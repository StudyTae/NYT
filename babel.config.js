module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-optional-chaining'],
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathSuffix: './src/common',
            rootPathPrefix: '@common/',
          },
          {
            rootPathSuffix: './src/components',
            rootPathPrefix: '@components/',
          },
          {
            rootPathSuffix: './src/data',
            rootPathPrefix: '@data/',
          },
          {
            rootPathSuffix: './src/img',
            rootPathPrefix: '@img/',
          },
          {
            rootPathSuffix: './src/nav',
            rootPathPrefix: '@nav/',
          },
          {
            rootPathSuffix: './src/pages',
            rootPathPrefix: '@pages/',
          },
          {
            rootPathSuffix: './src/css',
            rootPathPrefix: '@css/',
          },
          {
            rootPathSuffix: '.',
            rootPathPrefix: '/',
          },
        ],
      },
    ],
  ],
};
