//webpack中的配置
// var webpack = require('webpack');
// var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'eval-source-map', // 配置生成Source Maps，选择合适的选项
	//__dirname:node.js中的一个全局变量，它指向当前执行脚本所在的目录
	entry: __dirname + '/app/main.js', // 唯一入口文件,__dirname:是node中的一个全局变量，它指向执行脚本所在的目录
	output: {
		publicPath: 'http://localhost:8080/assets/', // 部署在服务器的目录
		path: __dirname + '/public', // 打包后的文件存放地址
		filename: 'bundle.js' //打包后输出的文件名
	},
	
	devServer:{
		contentBase:'./public',//本地服务器所架子啊的页面目录
		colors:true,
		inline:true,//实时刷新
		historyApiFallback:true // 不跳转
	},

	/*open:{
		options:{
			delay:500
		},
		dev:{
			path:'http://localhost:8080/webpack-dev-server/asset/bundle'
		}
	},
	*/
	/*
	resolve:{
		extensions:['','.js','.jsx']
		alias:{
			//配置别名
			'styles':__dirname + '/app/main.js'
		}
	},*/

	// 添加json-loader
	module: { //在配置文件里添加JSON loader
		loaders: [{
			test: /\.json$/,
			loader: "json-loader"
		}, {
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
		}, {
			test: /\.css$/,
			loader: 'style-loader!css-loader?module' //对样式表处理,从右往左依次执行
		}]
	},

	postcss:[
		require('autoprefixer') // 调用autoprefixer插件，使用postcss为css代码自动添加适应不同浏览器的css前缀
	],

/*	plugins: [
	    new webpack.HotModuleReplacementPlugin()//热加载插件
	]*/

	
}