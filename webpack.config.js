const webpack = require('webpack')
const autoprefixer = require('autoprefixer')

module.exports = {
    entry: [
        './src/index.js',
        './src/index.scss'
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer()]
                        }
                    },
                    'sass-loader'
                ],
            }
        ]
    },
    resolve: {
        modules: [`${__dirname}/src`, 'node_modules'],
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        path: `${__dirname}/dist`,
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        port: 6969,
        hot: true
    }
}
