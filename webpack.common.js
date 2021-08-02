const path=require("path");
const HtmlWebpackPlugin=require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports={
    entry: path.resolve(__dirname, 'src/scripts/index.js'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    module:{
        rules:[
            // Style & CSS Loader
            {
                test:/\.css/,
                use:[
                    {
                        loader:"style-loader"
                    },
                    {
                        loader:"css-loader"
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              }
        ]
    },
    plugins:[
        // HTML Webpack Plugin
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename:"index.html"
        }),
        new CopyWebpackPlugin({
            patterns: [
              {
                from: path.resolve(__dirname, 'src/public/'),
                to: path.resolve(__dirname, 'dist/'),
              },
            ],
          }),
    ]
}