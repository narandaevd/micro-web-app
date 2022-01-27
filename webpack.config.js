const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const clientDir = path.resolve(__dirname, 'client');
const distDir = path.resolve(__dirname, 'dist');
const srcDir = path.resolve(clientDir, 'src');
const publicDir = path.resolve(clientDir, 'public');

const TSXRule = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: 'ts-loader',
}

const SCSSRule = {
    test: /\.s[ac]ss$/,
    use: ['style-loader', 'css-loader', 'sass-loader']
}

module.exports = {
    entry: ['@babel/polyfill', path.resolve(clientDir, 'index.tsx')],
    output: {
        path: path.resolve(distDir, 'dist'),
        filename: '[name].[hash].js'
    },
    module: {
        rules: [
            TSXRule,
            SCSSRule
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(publicDir, 'index.html')}),
        new CleanWebpackPlugin(),
    ],
    devServer: {
        port: 7000,
    },
    resolve: {
        extensions: ['.tsx', '.jsx', '.js', '.ts'],
    },
}