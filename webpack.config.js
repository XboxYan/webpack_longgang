var path = require('path');
var webpack = require('webpack');
module.exports = {
    //插件项
    plugins: [
        //new webpack.optimize.CommonsChunkPlugin('common.js')
    ],
    //页面入口文件配置
    entry: {
        'APPlist': path.resolve(__dirname, 'components/APPlist.init.js'),
        'APPsubmit': path.resolve(__dirname, 'components/APPsubmit.init.js'),
    },
    //入口文件输出配置
    output: {
        path: path.resolve(__dirname, 'out'),
        //path: path.join(__dirname, 'out'),
        publicPath: "/out/",
        filename: '[name].bundle.js',
        //chunkFilename: "[name].js"
    },
    module: {
        //加载器配置
        loaders: [{
            test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
            loader: 'babel', // 加载模块 "babel" 是 "babel-loader" 的缩写
            query:
            {
                presets: ['es2015', 'react']
            }
        },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            { 
                test: /\.(png|jpg|gif)$/, 
                loader: 'url?limit=8192' 
            }
        ]
    }
};