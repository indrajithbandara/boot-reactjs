# ReactjsBoot Demo Project

> 基于 <code>reactjs</code> 快速构建前端单页项目，涉及的技术有：<code>reactjs</code> <code>redux</code> <code>router</code> <code>ES6</code> <code>sass</code> <code>webpack</code> <code>eslint</code> <code>按需加载</code>等

## 第一步：配置环境

#### Nodejs
+ 下载地址: [http://nodejs.cn](http://nodejs.cn)
+ 或者mac系统通过一下命令安装，安装以后<code>npm</code>自动也会被安装
```shell
brew install node
```


## 第二步：启动项目

#### 克隆
```shell
git clone git@github.com:tt-ghost/boot-reactjs.git
```
#### 安装依赖
```shell
npm install
```
由于 npm 默认从国外仓库去下载依赖包，有些包可能安装失败，这个时候可以执行以下命令全局安装 cnpm 并将镜像仓库设置到淘宝服务器
```shell
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

#### 启动项目
+ 开发环境：通过以下命令可以启动开发模式，或者执行 <code>npm run prod</code> 命令启动生产环境，会在根目录新建 <code>dist</code> 文件夹，上线时只要将这个目录的文件丢在站点根目录即可。
```shell
npm start
```
接下来访问 [http://127.0.0.1:9000](http://127.0.0.1:9000)
+ 生产环境：
```shell
npm run prod
```

## 第三步：项目说明

#### 项目结构
```linux
.
├── README.md                      
├── dist                          // 最终上线文件夹
├── node_modules                  // 项目依赖包
├── package.json                  // npm 配置
├── src                           // 项目源文件
│   ├── actions                   // redux相关
│   ├── constants                 // 站点静态配置、URL等
│   ├── entry                     // 入口文件
│   ├── public                    // 静态资源，打包时会 copy到dist目录
│   ├── reducers                  // redux相关
│   ├── routes                    // 站点路由配置，按需加载也在此配置
│   ├── style                     // sass 源文件
│   └── views                     // 页面组件
├── webpack.config.dev.js         // 开发环境配置
├── webpack.config.prod.js        // 生产环境配置
└── webpack.config.stage.js       // stage环境配置，可根据具体情况添加环境配置
```

## 参考文档
+ 关于ractjs的用法请参考[官方文档](http://reactjs.cn/)(中文版)
快速入门可以参考 阮一峰 github [react-demos](https://github.com/ruanyf/react-demos)

