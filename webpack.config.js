const path = require("path");
const mcep = require("mini-css-extract-plugin");

module.exports = {
  entry: "./frontend/src/index.js", // file đầu vào
  output: {
    path: path.resolve(__dirname, "frontend/public/dist"), // folder chứa bundle
    filename: "bundle.js", // tên file bundle
    clean: true, // xóa toàn bộ file static(tĩnh) trong folder lấy path
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,      // các file .js hoặc .jsx
        exclude: /node_modules/,  // loại trừ node_modules
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /\.s[ac]ss$/i,  // .sass hoặc .scss
        use: [
          mcep.loader, // chèn CSS vào DOM
          "css-loader",   // đọc CSS
          "sass-loader"   // biên dịch SCSS/Sass sang CSS
        ],
      },
    ]
  },
  resolve: {
    extensions: [".js", ".jsx",".sass", ".scss"] // import file không cần ghi đuôi
  },
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, './frontend/public/dist'),
    },
    port: 3000, // FE chạy cổng này
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // BE chạy ở đây
        pathRewrite: { '^/api': '' },    // bỏ prefix /api nếu BE không có
        changeOrigin: true,
      },
    },
  },
  plugins: [
    new mcep({
      filename: "styles.css", // file CSS output
    }),
  ],
};
