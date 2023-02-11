const path = require('path')
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: ["@babel/polyfill", "./src/index.tsx"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[hash].js",
        publicPath: '/',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 3000,
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx',],
        alias: {
            '@': path.join(__dirname, 'src'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({template: './public/index.html'}),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            }, {
                test: /\.(jpg|jpeg|png|svg)$/,
                use: ["file-loader"]
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }, {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }, {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react', "@babel/preset-typescript"]
                    }
                }
            },
        ]
    }
}