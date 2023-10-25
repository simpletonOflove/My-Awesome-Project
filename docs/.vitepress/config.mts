import { defineConfig } from 'vitepress'
// 路由表
import { blog } from './router/blog.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:"/My-Awesome-Project/",
  lang:'zh-CN',
  title: "一纸话长安",
  description: "我的个人博客",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' },
      { 
        text: '教程',
        items: [
          { text: '博客搭建', link: '/blog/博客搭建' },
        ]
      }
    ],

    sidebar: {
      'blog':blog
    },
    // 在 sidebar 后添加
    // outlineTitle: '本页目录',
    // darkModeSwitchLabel: '切换主题',
    // sidebarMenuLabel: '菜单',
    // returnToTopLabel: '回到顶部',
    // docFooter: {
    //   prev: '上一页',
    //   next: '下一页'
    // },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    // search: {
    //   provider: 'algolia',
    //   options: {
    //     appId: '你的appid',
    //     apiKey: '你的APIkey，注意是搜索的key',
    //     indexName: '你的indexName',
    //   },
    // }
  }
})
