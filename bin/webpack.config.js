const pkg = require("../package.json");
const path = require("path");
const noop = Function.prototype();
const GeneratorTampermonkeyScriptPlugin = require("./plugins/generatorTampermonkeyScript");
module.exports = (env) => {
  return {
    mode: "development",
    entry: "./index.js",
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "../plugin"),
    },
    plugins: [
      new GeneratorTampermonkeyScriptPlugin({
        build_type: env.BUILD_TYPE,
      }),
    ],
  };
};
