## 搭建环境
使用技术
- node.js
- vue.js
- vue-router
- vuex
- element
- axios
使用IDE
- WebStorm
### 基础环境
#### 安装node
`brew install node`
#### 安装webpack,全局
`npm install webpack -g`
#### 安装vue-cli
`npm install vue-cli -g`
#### 配置淘宝镜像
`npm config set registry https://registry.npm.taobao.org`
### 项目创建
#### vue2.x创建,自建工程目录
`vue init webpack badger-ui`
#### 启动测试
`npm run dev`
### 第三方引入
#### 使用webstorm导入项目
#### 安装elementUI,运行依赖
`npm i element-ui -S`
#### 导入elementUI
```js
// elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
```
#### 自行elementUI测试
#### 页面路由测试,创建并引入Login.vue,配置路由,localhost:8080浏览器测试
```js
import Login from '../views/Login'
 {
      path: '/login',
      name: 'Login',
      component:Login
    }
```
#### 安装scss
```
npm install node-sass --save-dev        //安装node-sass 
npm install sass-loader --save-dev      //安装sass-loader 
npm install style-loader --save-dev         //安装style-loader
```
#### scss使用
```
<style lang="scss">

</style>
```
#### 安装axios
`npm i axios -S`
#### axios测试
```js
methods:{
      Axios() {
        axios.get('http://localhost:8080').then(
          res=>{
            alert(res.data);
          }
        )
      },
      //获取后端用户
      getUser() {
            axios.get('http://localhost:8081/sys/user/').then(res=>{
              alert(JSON.stringify(res.data));
            })
          }
    }
```
### 用户接口
```java
 @GetMapping("/")
    public List<SysUser> findAll() {
        return sysUserService.findAll();
    }
```
### swagger测试
`http://localhost:8081/swagger-ui.html#/sys-user-controller/findAllUsingGET`

