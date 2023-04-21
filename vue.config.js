const { defineConfig } = require('@vue/cli-service');
const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = defineConfig({
	// default
	transpileDependencies: false,
	/* transpileDependencies: [
        /[\\\/]node_modules[\\\/]quasar-framework[\\\/]/
    ], */
	// default
	filenameHashing: true,	// false 来关闭文件名哈希
	lintOnSave: false,	// 关闭eslint
	// 打包时不生成.map文件
	productionSourceMap: false,
	// default
	publicPath: '/',
	// default
    outputDir: 'dist',

    // 放置静态资源(js、css、img、fonts)的相对于outputDir的目录
    assetsDir: 'static',
	pages: {
		index: new PageReset('index', 'Index Page'),
		demo: new PageReset('demo', 'Demo Page')
	},
	// webpack额外的配置
    configureWebpack: config => {
		
		config.optimization.splitChunks.cacheGroups.config = {
			name: 'config',
			test: function(module){
				return (
					module.resource && /\.js$/.test(module.resource) &&
					module.resource.indexOf(path.join(__dirname, './src/static/config.js')) === 0
				)
			},
			minChunks: 1,
			maxInitialRequests: 5,
			chunks: 'all',
			minSize: 0,
			priority: 100
		}

		config.optimization.minimizer[0].options.exclude = /\/config\.[0-9a-z]{8}\.js$/

		// 对象模式
		/* optimization: {
            splitChunks: {
                cacheGroups: {
                    config: {
                        name: 'config',
                        test: function(module){
							return (
								module.resource && /\.js$/.test(module.resource) &&
								module.resource.indexOf(path.join(__dirname, './src/static/config.js')) === 0
							)
						},
                        minChunks: 1,
                        maxInitialRequests: 5,
						chunks: 'all',
                        minSize: 0,
                        priority: 100
                    },
                }
            },
			minimizer: [
				new TerserPlugin({
					exclude: /\/config\.[0-9a-z]{8}\.js$/,
					parallel: true,
					terserOptions: {
						format: {
							comments: false, // 删除注释
						},
					},
					extractComments: false,
				})
			]
        } */
	},
	// 开发服务器配置 https://webpack.js.org/configuration/dev-server/
    devServer: {
        port: '8999',
		open: true,
        proxy: {
            '/api': {
                target: 'http://39.108.64.200:44113',
                pathRewrite: {
                    '^/api': ''
                },
                ws: true,
                changeOrigin: true
            }
        }
    },
})


/**
 * 页面构造器
 * @param {String} name 页面名称
 * @param {String} title 页面title
 */
function PageReset(name, title) {
    // page 的入口
    this.entry = `src/${name}/main.js`
    // 模板来源
    this.template = process.env.NODE_ENV === 'production' ? 'public/index.html' : 'public/index.html'
    // 在 dist/index.html 的输出
    this.filename = `${name}.html`
    // 当使用 title 选项时，
    // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    this.title = title
    // 在这个页面中包含的块，默认情况下会包含
    // 提取出来的通用 chunk 和 vendor chunk。
    this.chunks = ['chunk-vendors', 'chunk-common', name]
    this.minify = {
        removeComments: true,
        collapseWhitespace: true,
        keepClosingSlash: true,
        removeAttributeQuotes: false,
        caseSensitive: false,
        collapseBooleanAttributes: true
    }
    this.inject = process.env.NODE_ENV !== 'production' ? true : 'body'
}