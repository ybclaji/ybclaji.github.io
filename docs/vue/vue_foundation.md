## 前端工程化
开发中把所需的工具、技术、流程、经验进行规范化、标准化
- 模块化：js模块化，css模块化，资源模块化
- 组件化：复用的ui结构、样式、行为
- 规范化：目录结构划分、编码规范化、接口规范化、文档规范化、git分支管理
- 自动化：自动化构建、自动部署、自动测试
> 目前主流前端工程化解决方案
- webpack 
- parcel(开发第三方)
### webpack
前端工程化的具体解决方案
功能：模块化支持、代码压缩混淆、处理兼容性、性能优化

##### 基本使用

> 创建项目

<img src="..\assets\images\vue\webpack.png" alt="w" style="margin:0" />

> 项目中安装webpack 

<img src="..\assets\images\vue\wp02.png" alt="w" style="margin:0" />

-S 是--save缩写：开发和生产依赖  -D是--save-dev缩写：开发依赖

> 在项目中配置webpack

<img src="..\assets\images\vue\wp03.png" alt="w" style="margin:0" />

##### mode的可选值
1. development
	- 开发环境
	- 不会对打包生成的文件进行代码压缩和性能优化
	- 打包速度快，适合开发阶段
2. production
	- 生产环境
	- 会对打包文件进行压缩和性能优化
	- 打包速度慢，适合发布阶段
##### webpack.config.js文件
webpack.config.js是webpack的配置文件，执行npm run dev时先读取webpack配置文件，然后执行webpack命令
> 在webpack4.x、5.x中有如下约定：1、默认打包入口文件在src中找index.js,2、默认输出文件路径dist->main.js,修改路径和文件名均会导致报错，可以在webpack.config.js中修改打包的默认约定
##### 自定义打包的入口与出口
在webpack.config.js中，通过entry节点指定打包的入口，output节点指定打包的出口
<img src="..\assets\images\vue\wp04.png" alt="w" style="margin:0" />

##### webpack插件
> 每次修改源码运行页面都需要npm run dev，如何解决这个问题？
1. webpack-dev-server

  	- 监听源码的修改，webpack会自动进行项目的打包和构建
  	- webpack-dev-server 会启动一个实时打包的http服务器
2. html-webpack-plugin
	- webpack中的html插件（类似模板引擎插件）
	- 可以通过此插件定制index.html内容
	
3. 安装webpack-dev-server
	- 安装`npm install webpack-dev-server@3.11.2 -D`
	- 修改package.json-->scripts: "dev":"webpack serve"
	- 运行npm run serve报错，修改package.json里面webpack-cli的版本到4.9.0 从新运行
	```
	PS D:\project\webfront\vue\webpacktest> npm run dev 

> webpacktest@1.0.0 dev D:\project\webfront\vue\webpacktest
> webpack serve

[webpack-cli] Unable to load '@webpack-cli/serve' command
    at WebpackCLI.makeCommand (D:\project\webfront\vue\webpacktest\node_modules\webpack-cli\lib\webpack-cli.js:173:21)
    at ServeCommand.apply (D:\project\webfront\vue\webpacktest\node_modules\@webpack-cli\serve\lib\index.js:41:19)
    at loadCommandByName (D:\project\webfront\vue\webpacktest\node_modules\webpack-cli\lib\webpack-cli.js:907:35)
    at async Command.<anonymous> (D:\project\webfront\vue\webpacktest\node_modules\webpack-cli\lib\webpack-cli.js:1462:17)
    at async Promise.all (index 0)
    at async WebpackCLI.run (D:\project\webfront\vue\webpacktest\node_modules\webpack-cli\lib\webpack-cli.js:1500:9)
    at async runCLI (D:\project\webfront\vue\webpacktest\node_modules\webpack-cli\lib\bootstrap.js:11:9)
npm ERR! code ELIFECYCLE
npm ERR! errno 2
npm ERR! webpacktest@1.0.0 dev: `webpack serve`
npm ERR!
npm ERR! Failed at the webpacktest@1.0.0 dev script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\Administrator\AppData\Roaming\npm-cache\_logs\2021-12-03T03_10_10_189Z-debug.log
PS D:\project\webfront\vue\webpacktest> npm install 
npm ERR! code ETARGET
npm ERR! notarget No matching version found for webpack-cli@^4.9.2.
npm ERR! notarget In most cases you or one of your dependencies are requesting
npm ERR! notarget
npm ERR! notarget It was specified as a dependency of 'webpacktest'
npm ERR! notarget
	```
> 安装插件后修改index.js后，会自动运行webpack-dev-serve,看打印信息地址变更为localhost:8080,输出变为根目录，此时bundle.js文件存储在内存中，方便快速更新，需要在html中引入bundle.js
```<!-- 加载引入内存中的budle.js -->
    <script src="/bundle.js"></script>
```
```
  	i ｢wds｣: Project is running at http://localhost:8080/
i ｢wds｣: webpack output is served from /
i ｢wds｣: Content not from webpack is served from D:\project\webfront\vue\webpacktest
i ｢wdm｣: asset bundle.js 689 KiB [emitted] (name: main)
```

 4.  如何在运行wepack-dev-serve后，打开localhost:8080能直接打开首页？

    > 使用html-webpack-plugin，会把指定的页面复制到根目录,然后也不需要在index.html中引入内存中的bundle.js

` npm install html-webpack-plugin@5.3.2 -D`

	 html-webpack-plugin的使用
```
//1 导入html-webpack-plugin插件，得到插件的构造函数
const HtmlPlugin = require('html-webpack-plugin')
//2 new 构造函数，创建插件实例
const htmlPuugin = new HtmlPlugin({
    //指定要复制的页面
    template:'./src/index.html',
    //指定复制文件的存放路径,会存储在内存
    filename:'./index.html'
})
//使用node.js导出语法，导出一个webpack配置对象
module.exports = {
    
    mode: 'development',  //开发阶段development 生产阶段production
    entry: path.join(__dirname,'./src/index.js'),  //打包入口文件的路径
    output:{
        path: path.join(__dirname,'./dist'),  //输出文件的存放路径
        filename:'bundle.js'  //输出文件的名称
    },
    //3 插件的数组，webpack运行时，会调用插件
    plugins:[htmlPuugin]
}
```
5. dev-serve节点
配置webpack.config.js，在运行npm run dev后 自动打开浏览器,指定端口号，地址
```
 devServer: {
        open:true,  //自动打开浏览器
        port:80,   //指定端口号
        //指定运行的地址
        host:'127.0.0.1'
    }
```
6. webpack里的loader
webpack默认只能处理.js的文件模块，其他非js模块，需要调用loader处理，如处理.css
<img src="..\assets\images\vue\wp05.png" alt="w" style="margin:0" />
> loader处理过程
<img src="..\assets\images\vue\wp06.png" alt="w" style="margin:0" />
<img src="..\assets\images\vue\wp07.png" alt="w" style="margin:0" />
<img src="..\assets\images\vue\wp08.png" alt="w" style="margin:0" />
<img src="..\assets\images\vue\wp09.png" alt="w" style="margin:0" />

7. webpack处理js高级语法
<img src="..\assets\images\vue\wp10.png" alt="w" style="margin:0" />
babel-loader安装
<img src="..\assets\images\vue\wp11.png" alt="w" style="margin:0" />
配置babel-loader
<img src="..\assets\images\vue\wp12.png" alt="w" style="margin:0" />
8. webpack打包发布
<img src="..\assets\images\vue\wp13.png" alt="w" style="margin:0" />
图片放到images
<img src="..\assets\images\vue\wp14.png" alt="w" style="margin:0" />
js文件放到js目录
<img src="..\assets\images\vue\wp15.png" alt="w" style="margin:0" />
每次发布前自动删除dist
<img src="..\assets\images\vue\wp16.png" alt="w" style="margin:0" />

9 sourcemap
sourceMap是信息文件，存储了位置信息，开发阶段打开sourcemap,发布阶段需要关闭
<img src="..\assets\images\vue\wp17.png" alt="w" style="margin:0" />
<img src="..\assets\images\vue\wp18.png" alt="w" style="margin:0" />
<img src="..\assets\images\vue\wp19.png" alt="w" style="margin:0" />
<img src="..\assets\images\vue\wp20.png" alt="w" style="margin:0" />
<img src="..\assets\images\vue\wp21.png" alt="w" style="margin:0" />
<img src="..\assets\images\vue\wp22.png" alt="w" style="margin:0" />
10 路径问题
配置使用@表示src目录`import msg from '@/msg'
<img src="..\assets\images\vue\wp23.png" alt="w" style="margin:0" />