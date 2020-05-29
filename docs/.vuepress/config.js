module.exports = {
  title: '善良的颜小色',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'vuepress', link: '/vuepress/' },
      { text: 'badger', link: '/badger/' },
      {text:'前端',link:'/mall-learning/web/'},
      {text:'后端',link:'/mall-learning/admin/'}
    ],
    // 侧边栏动态展示,使用json数组和对象,导航变化对象变化,侧边栏变动,
    // sidebar:'auto',
    sidebar:{
      '/badger/':[{
        title:'badger后端开发',
        collapsable: true,
        children:[
          {title:'说明',path:'/badger/'},
          {title:'开发环境',path:'/badger/env'},
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
