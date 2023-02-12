const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/js')
  },
  module: {
    rules: [
      {
        // 処理対象ファイル
        test: /\.js$/,
        // 処理対象ディレクトリ
        include: path.resolve(__dirname, 'src/js'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', { modules: false}]]
            }
          }
        ]
      }
    ]
  }
};
