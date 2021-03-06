const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const clientDir = path.resolve(__dirname, 'client');
const distDir = path.resolve(__dirname, 'dist');
const srcDir = path.resolve(clientDir, 'src');
const publicDir = path.resolve(clientDir, 'public');

const TSXRule = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: 'ts-loader',
};
const SCSSRule = {
    test: /\.s[ac]ss$/,
    use: ['style-loader', 'css-loader', 'sass-loader']
};
const CSSRule = {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
};

module.exports = {
    mode: 'development',
    entry: ['@babel/polyfill', path.resolve(clientDir, 'index.tsx')],
    output: {
        path: distDir,
        filename: '[name].[contenthash].js'
    },
    module: {
        rules: [
            TSXRule,
            SCSSRule,
            CSSRule
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(publicDir, 'index.html')}),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
              { 
                  from: path.resolve(publicDir, 'videos'), 
                  to: path.resolve(distDir, 'videos'), 
              },
              { 
                  from: path.resolve(publicDir, 'img'), 
                  to: path.resolve(distDir, 'img'), 
              },
            ],
          }),
    ],
    devServer: {
        port: 7000,
        static: {
            directory: publicDir
        }
    },
    resolve: {
        extensions: ['.tsx', '.jsx', '.js', '.ts'],
    },
}