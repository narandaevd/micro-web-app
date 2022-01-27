const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const TSXRule = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: 'ts-loader',
}

const SCSSRule = {
    test: /\.s[ac]ss/,
    use: ['style-loader', 'css-loader', 'sass-loader']
}

module.exports = {
    entry: path.resolve(__dirname, 'index.tsx'),
    output: {
        path: path.resolve(__dirname, '../', 'dist'),
        filename: '[name].[hash].js'
    },
    module: {
        rules: [
            TSXRule,
            SCSSRule
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(__dirname, '../', 'index.html')}),
        new CleanWebpackPlugin(),
    ]
}