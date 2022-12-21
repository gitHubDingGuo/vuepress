import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { tocPlugin } from '@vuepress/plugin-toc'
import { copyrightPlugin } from "vuepress-plugin-copyright2";
import { defaultTheme } from '@vuepress/theme-default'
const __dirname = getDirname(import.meta.url)
import { getDirname, path } from '@vuepress/utils'
import {defineUserConfig } from 'vuepress'
import { commentPlugin } from "vuepress-plugin-comment2";

export default defineUserConfig({
   lastUpdated:false,
   contributors:false,
   title:'Java小册子',
   description: 'Java小册子', //meta
   TocPluginOptions:{level:[1]},
   //替换内部组件
   alias: {
    '@theme/Page.vue': path.resolve(__dirname, './components/MyPage.vue'),
    '@theme/SidebarItem.vue': path.resolve(__dirname, './components/MySidebarItem.vue'),
    //'@theme/SidebarItems.vue': path.resolve(__dirname, './components/MySidebarItems.vue'),
    //'@theme/Sidebar.vue': path.resolve(__dirname, './components/MySidebar.vue'),

   },
  head: [
    // 设置 favor.ico，docs/.vuepress/public 下
    [
        'link', {rel: 'icon', href: '/images/hero.png' }
    ],
    [
      'link', {rel: 'stylesheet', href: '/css/common.scss' }
    ],
    [ 
      'script',  {type: 'text/javascript', "data-ad-client": "ca-pub-5088193899865249",async: true,src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"}
    ],
    [
        'script', {type: 'text/javascript', src: '/js/ad.js'},             
    ]
],
plugins: [
  [registerComponentsPlugin({
    componentsDir: path.resolve(__dirname, './components'),
  })],
  [
    docsearchPlugin({ //全局搜索
      appId:'123',
      apiKey: '<API_KEY>',
      indexName: '<INDEX_NAME>',
      locales: {
        '/': {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
            },
          },
        },
        '/zh/': {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
            },
          },
        },
      },
    }),
  ],
  [
   // 
   tocPlugin({ //目录插件
       
    }),
  ],
    //https://vuepress-theme-hope.github.io/v2/copyright/zh/
   [
      copyrightPlugin({
          triggerWords:50,
          author: "Mr.Moey",
          license: "MIT",
          hostname: "https:javahouse.top/",
          global: true,
      })
   ],
   [

    commentPlugin({
			provider: "Giscus",
			repo: "gitHubDingGuo/Giscus",
			repoId: "R_kgDOIld5hA",
			category: "Announcements",
			categoryId: "DIC_kwDOIld5hM4CS_Fj",
		  })   

   ] 
  


 
],//plugin
theme: defaultTheme({
  navbar: [
    //{text: '首页', link: '/',},
    //{text: '其他', link: '/md/java/javatop.md'},
    {
      text: '网站工具',
      link: '/md/webtool/tool.md'
    },
    {
      text: '面试',
      link: '/md/interview/java/javatop.html'
    },
    {
      text: '关于',
      link: '/md/about/me/me-x.html'
    },
  ],
  //// 所有页面会使用相同的侧边栏
    /*sidebar:[
          {
            text:'使用教程',
            children: [
              {
                text: '第一篇',
                link: '/md/java/javatop.md',
            
              }
            ]
            
          },
          {
            text:'资源导航',
            children: [
              {
                text: '开发百宝箱子',
                link: '/md/webtool/tool.md',
            
              }
            ]
            
          },
         '/md/webtool/tool.md'
    ],
    */
   
  sidebar: {
    '/md/java/': [//一二级到导航栏
        {
          text: 'Java基础',
          children: [
            {
                text:'Java基础-面向对象',
                link:'/md/java/javatop.md'
            },
            {
              text:'Collecion类关系图',
              link:'/md/java/collection.md'
            }
          ]
        },
        {
          text: 'Java集合框架',
          children: [
            {
                text:'Collecion类关系图',
                link:'collection.md'
            }
          ]
        },

      ],          
      '': [''], //不能放在数组第一个，否则会导致右侧栏无法使用 
      /*'/md/interview/':[{ //一二三级到导航栏
          text:'知识体系题目',
          children:['/md/interview/interview.md']
        }
      ],*/
      '/md/interview/':[
          { //一二级到导航栏
          text:'面试相关题目',
          children:[
              {
                text:'Java',
                collapsible:true,
                children:[
                  {sidebarDepth:10,text:'Java基础上',link:'/md/interview/java/javatop.html'},
                  {sidebarDepth:10,text:'Java基础下',link:'/md/interview/java/javadown.html'}
                ]
              },
              {
                text:'MQ',
                collapsible:true,
                children:[
                  {sidebarDepth:10,text:'KAFKA',link:'/md/interview/mq/kafka.html'},
                  {sidebarDepth:10,text:'MQ',link:'/md/interview/mq/mq.html'}
                ]
              },
              {
                text:'JVM',
                sidebarDepth:10,
                link:'/md/interview/jvm/jvm.html'  
              },
              {
                text:'Mybatis',
                sidebarDepth:10,
                link:'/md/interview/mybatis/mybatis.html'  
              },
              {
                text:'Mysql',
                sidebarDepth:10,
                link:'/md/interview/mysql/mysql.html'  
              },
              {
                text:'计算机与网络',
                sidebarDepth:10,
                link:'/md/interview/network/network.html'  
              },
              {
                text:'Redis',
                sidebarDepth:10,
                link:'/md/interview/redis/redis.html'  
              },
              {
                text:'Spring',
                sidebarDepth:10,
                link:'/md/interview/spring/spring.html'  
              },
              {
                text:'操作系统',
                sidebarDepth:10,
                link:'/md/interview/system/system.html'  
              },
            ]
          }
       ],
      '/md/webtool/':[
        {
          text:'资源导航',
          children:['/md/webtool/tool.md']
        }
      ],


      '/md/about/':[
          {
            text:'关于',
            collapsible:false,
            children:[
              {sidebarDepth:10,text:'关于-我',link:'/md/about/me/me-x.html'},
              {sidebarDepth:10, text:'关于-网站错误反馈',link:'/md/about/me/siteerror.html'},
              {sidebarDepth:10, text:'关于-文档的内容',link:'/md/about/me/content.html'}
             ]
          },
        {
            text:'关于-本文挡的搭建',
            //children:['/md/about/me/site-error.html']
        }
      ]






     }
     
  })
})
