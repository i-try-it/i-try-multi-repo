const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        libraryTarget: 'umd',
        library: 'FirstLib',
        umdNamedDefine: true
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader'
        }]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    mode: 'production'
};
