module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            core: "./src/core",
            features: "./src/features",
            screens: "./src/screens",
          },
        },
      ],
    ],
  };
};
