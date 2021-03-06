module.exports = {
   entry: [ '@babel/polyfill', './src/mod-03/main.js' ],
   output: { path: __dirname, filename: 'bundle.js' },
   devServer: {
      contentBase: __dirname + '/public'
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader'
            }
         }
      ],
   }
}