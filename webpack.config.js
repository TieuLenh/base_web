const path = require("path");

module.exports = {
  entry: "./frontend/src/index.js", // file đầu vào
  output: {
    path: path.resolve(__dirname, "frontend/public"), // folder chứa bundle
    filename: "bundle.js", // tên file bundle
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,      // các file .js hoặc .jsx
        exclude: /node_modules/,  // loại trừ node_modules
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"] // import file không cần ghi đuôi
  },
  mode: "development"
};
