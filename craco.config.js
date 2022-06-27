const path = require("path");
const copyWebpackPlugin = require("copy-webpack-plugin");
const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    alias: {
      //使用@替换src
      "@": resolve("src"),
      //components替换src/components
      components: resolve("src/components"),
    },
    entry: {
      app: "./src/index.js",
    },
    exclude: /src\/doc/,
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
      {
        test: /\.md$/,
        use: "raw-loader",
      },
    ],
    plugins: [
      new copyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "./src/doc"), //想要复制的文件夹
            to: "doc", //复制在哪个文件夹
            globOptions: { ignore: [".*"] },
          },
        ],
      }),
    ],
  },
};
