module.exports = {
  title: '善良的颜小色',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'vuepress', link: '/vuepress/' },
      { text: 'git', link: '/git/' },
      { text: 'badger', link: '/badger/' },
      { text: 'badger-ui', link: '/badger-ui/' },
      {text:'前端',link:'/mall-learning/web/'},
      {text:'后端',link:'/mall-learning/admin/'}
    ],
    // 侧边栏动态展示,使用json数组和对象,导航变化对象变化,侧边栏变动,
    // sidebar:'auto',
    sidebar:{
      '/badger/':[{
        title:'后端学习',
        collapsable: false,
        children:[
          {title:'说明',path:'/badger/'},
          {title:'开发环境',path:'/badger/env'},
        ]
      }],
      '/badger-ui/':[{
        title:'前端学习',
        collapsable: false,
        children:[
          {title:'env',path:'/badger-ui/'},
          {title:'axios',path:'/badger-ui/axios'},
          {title:'login',path:'/badger-ui/login'},
        ]
      }],
      '/vuepress/':[{
        title:'基本使用',
        collapsable: true,
        children:[
          {title:'快速上手',path:'/vuepress/'},
          {title:'配置',path:'/vuepress/baseconfig'},
          {title:'部署',path:'/vuepress/deploy'},
        ]
      }],
      '/git/':[{
        title:'git&github',
        collapsable: false,
        children:[
          {title:'上手',path:'/git/'},
          {title:'概念',path:'/git/concept'},
          {title:'流程',path:'/git/activity'},
          {title:'基本操作',path:'/git/action'},
          {title:'分支',path:'/git/branch'},
          {title:'远程',path:'/git/remote'},
          {title:'P&R',path:'/git/pullrequest'},
          {title:'开发流程',path:'/git/devflow'},
          {title:'git-flow',path:'/git/gitflow'},
          {title:'外链',path:'/git/otherDoc'},
        ]
      }],
      '/mall-learning/admin':[{
        title:'mall后端学习',
        collapsable: false,
        children:[
          {title:'前端',path:'/mall-learning/admin/'},
          {title:'后端',path:'/mall-learning/admin/'},
        ]
      }],
      '/mall-learning/web/':[{
        title:'mall前端学习',
        collapsable: false,
        children:[
          {title:'介绍',path:'/mall-learning/web/'},
          {title:'前端',path:'/mall-learning/web/two'},
        ]
      }]
    },
    //侧边栏提取h2的标题,设置成0禁用标题的链接,最大深度为2,同时提取h2,h3
    sidebarDepth:2
  }
}
