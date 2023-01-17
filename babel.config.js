module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      "babel-preset-expo",
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
    ],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            core: "./src/core",
            features: "./src/features",
            screens: "./src/screens",
            navigations: "./src/navigations",
          },
        },
      ],
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
          blacklist: null,
          whitelist: null,
          safe: false,
          allowUndefined: true,
        },
      ],
      [
        "babel-plugin-inline-import",
        {
          extensions: [".svg"],
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
