const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './app/javascripts/app.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.js'
    },
    plugins: [
        // Kopiraj app-ov index.html to the build folder.
        new CopyWebpackPlugin([
            { from: './app/index.html', to: "index.html" },
            { from: './app/list-item.html', to: "list-item.html" },
            { from: './app/product.html', to: "product.html" }
        ])
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }],
        loaders: [
            { test: /\.json$/, use: 'json-loader' },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                }
            }
        ]
    }
}