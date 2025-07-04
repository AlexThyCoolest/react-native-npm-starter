module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          alias: {
            '@components': './src/components',
            '@screens': './src/screens',
            '@config': './src/config',
            '@hooks': './src/hooks',
          },
        },
      ],
    ],
  };
};
