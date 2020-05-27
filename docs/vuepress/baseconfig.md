## 基本配置

### 配置文件
在docs目录下新建.vuepress目录,并创建config.js

### 配置文件格式
```js
module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around'
}
```
## 主题配置
默认主题可以自定义导航栏,侧边栏和首页
### 首页
默认主题提供一个首页,需要在根级readme.md里指定home:true
yaml front matter 以---code ---格式化
```yaml
home: true
heroImage: /hero.png
heroText: Hero 标题
tagline: Hero 副标题
actionText: 快速上手 →
actionLink: /zh/guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
```
以上为yaml front matter,任何之后的内容会以普通的markdown被渲染,并插入到features后面
### 导航栏链接
```
// .vuepress/config.js
module.exports = {
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ]
  }
}
```
### 导航栏下拉列表
```js
module.exports = {
  themeConfig: {
    nav: [
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: mall-learning },
          { text: 'Japanese', link: mall-learning }
        ]
      }
    ]
  }
}
```
### 导航栏下拉列表嵌套
```js
module.exports = {
  themeConfig: {
    nav: [
      {
        text: 'Languages',
        items: [
          { text: 'Group1', items: [/*  */] },
          { text: 'Group2', items: [/*  */] }
        ]
      }
    ]
  }
}
```
### 侧边栏动态展示
```js
// 侧边栏动态展示,使用json数组和对象,导航变化对象变化,侧边栏变动,
    // sidebar:'auto',
    sidebar:{
      '/vuepress/':[{
        title:'基本使用',
        collapsable:false,
        children:[
          {title:'快速上手',path:'/vuepress/start/'},
          {title:'配置',path:'/vuepress/baseconfig/'},
        ]
      }]
    }
``` 
### 侧边栏树形深度
```js
//侧边栏提取h2的标题,设置成0禁用标题的链接,最大深度为2,同时提取h2,h3
    sidebarDepth:2
```

