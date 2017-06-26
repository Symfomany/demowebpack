const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
// liste of plugins https://webpack.js.org/plugins/

const ExtractTextPlugin = require("extract-text-webpack-plugin");
// it's recommended to extract the style sheets into a dedicated file in production using the ExtractTextPlugin. 


module.exports = {
    entry: {
        ts: "./src/main.ts",
        vue: "./src/Main.vue",
        main: "./src/main.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js'
    },
    devtool: 'source-map', // sourceMap

    module: {
        rules: [

            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            { test: /\.css$/, use: 'css-loader' },
            { test: /\.ts$/, use: 'ts-loader' },
            { test: /\.vue$/, use: 'vue-loader' }

        ]
    },


    plugins: [
        //new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin({
            filename: 'build.min.css',
            allChunks: true,
        }),
        new HtmlWebpackPlugin({ template: './index.html' }), // create index.html clone in dist
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['ts', 'main', 'vue']
        }),

        // webpack-dev-server enhancement plugins
        new webpack.HotModuleReplacementPlugin(),
    ]
};