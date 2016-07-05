const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: __dirname + '/src/app.js',
        vendor: ['react', 'react-dom', 'react-router', 'flux']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[name].js'
    },
    devtool: 'eval',
    context: path.resolve(__dirname, 'src'),
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders:  ['react-hot', 'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-1,plugins[]=transform-decorators-legacy'],
        }]
    },
    node: {
        __filename: true
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        root: path.join(__dirname, 'src'),
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        colors: true,
        historyApiFallback: true,
        inline: true
    }
};
