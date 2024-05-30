const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: [
          path.resolve(__dirname, "node_modules"),
          path.resolve(__dirname, "dist")
        ]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist/lib"),
    clean: true,
    globalObject: "this",
    library: {
      name: "trados",
      type: "umd"
    }
  }
};
