/**
/**
 * 提示：如您想使用JS版本的配置文件可参考：https://github.com/xugaoyi/vuepress-theme-vdoing/tree/a2f03e993dd2f2a3afdc57cf72adfc6f1b6b0c32/docs/.vuepress
 */
// import { resolve } from 'path'
import { defineConfig4CustomTheme, UserPlugins } from 'vuepress/config'
import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types'
import dayjs from 'dayjs'
import baiduCode from './config/baiduCode' // 百度统计hm码
// import htmlModules from './config/htmlModules' // 自定义插入的html块
// import remarkGithubAdmonitionsToDirectives from "remark-github-admonitions-to-directives";



const DOMAIN_NAME = 'www.zhangtq.com' // 域名 (不带https)
const WEB_SITE = `https://${DOMAIN_NAME}` // 网址



export default defineConfig4CustomTheme<VdoingThemeConfig>({
  
  theme: 'vdoing', // 使用npm主题包
  // theme: resolve(__dirname, '../../vdoing'), // 使用本地主题包

  locales: {
    '/': {
      lang: 'zh-CN',
      title: "摘星",
      description: 'python、go、devops、linux、数据库、算法知识分享。始终相信,技术改变未来',
    }
  },
  // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）

  // 主题配置
  themeConfig: {
    // 导航配置
    nav: [
      { text: '首页', link: '/' },
      { 
        text: '后端', 
        link: '/backend/',
        items:[
          {
            text: 'python教程',
            // link: '/python/',
            items:[
              { text: '基础', link: '/ff0317/' },
              { text: '模块', link: '/9b5755/' },
              { text: 'Django', link: '/1df8bf/' },
              { text: 'Celery', link: '/142050/' },
              { text: 'Flask', link: '/d3e8d0/' },
              { text: 'Tornado', link: '/bbf8e1/' },
            ],
          },
          {
            text: 'golang教程',
            // link: '/golang/',
            items:[
              { text: '基础', link: '/a8f4bd/' },
              { text: '标准库', link: '/91a40b/' },
              { text: 'Web开发', link: '/974921/' },
              { text: '微服务', link: '/1d79a6/' },
              { text: '常用组件', link: '/883e4b/' },
              { text: '数据库相关', link: '/87cc75/' },
            ],
          
          },
        ],
      },
      {
        text: 'Devops',
        link: '/devops/',
        items: [
          { text: '工具链', 
            link: '/devopstools/',
            items: [
              {text: '分布式版本控制系统', link:'/617900/'},
              {text:'docker', link:'/c6c432/'},
              {text:'jenkins', link:'/f8aa3b/'},
              {text:'harbor', link:'/0bb88e/'},
              {text:'kubernetes', link:'/791cf5/'},
            ],
          },

          { text: '企业级方案',
            link: '/entenprise_solution/',
            items: [
              {text:'devops基础', link:'/40bb17//'},
              {text:'devops企业级方案', link:'/0d9a92/'},

            ],
          },
          { text: '其他',
            link: '/devops_another/',
            items:[
              { text: '技术文档', link: '/9a7ee40fc232253e/' },
              { text: 'GitHub技巧', link: '/4c778760be26d8b3/' },
              { text: 'Nodejs', link: '/117708e0af7f0bd9/' },
              { text: '博客搭建', link: '/41f87d890d0a02af/' },
            ],
          },

        ],
      },
      {
        text: '技术栈',
        link: '/techstack/',
        items: [
          {
            text: '数据库',
            // link: '/db/',
            items: [
              { text: 'Mysql', link: '/8aab47/' },
              { text: 'Redis', link: '/3d88fa/' },
              { text: 'Mongodb', link: '/7870e4/' },
              { text: 'Es', link: '/2645d8/' },
            ],
        
        },
        {
          text: '网络',
          // link: '/network/',
          items:[
            {text: 'HTTP协议', link: '/6b0d62/'},
          ],
        },
        {
          text: 'Linux',
          // link: '/linux/',
          items:[
            { text: 'Linux基础', link: '/30f776/' },
            { text: 'Linux高级', link: '/9d2948/' },
          ]
        },
        {
          text: '其他',
          // link: '/linux_another/',
          items:[
            {text: 'istio', link: '/41c413/'},
            {text: 'Nginx', link: '/5dbe6e/'},
            {text: 'RPC', link: '/6ffb53/'},
            {text: 'zabbix', link: '/f7cf04/'},
            {text: 'ELK', link: '/c99be3/'}
          ]
        },
        ],
      },      
      {
        text: '面试',
        link: '/interview/',
        items: [
          {
            text: '算法导论',
            link: '/throry/',
            items:[
              {text: '数据结构与算法基础', link: '/structure/'},
            ],
          },
          {
            text: 'Leetcode题目',
            link: '/leetcode/',
            items: [
              { text: 'leetcode算法题I', link: '/problem-1/' },
              { text: 'leetcode算法题II', link: '/problem-2/'},
              { text: 'leetcode算法题分类', link: '/971197/' },
            ]
          },
          {
            text: '高频题',
            link: 'common',
            items:[
              { text: 'python', link: '/interview/python/' },
              { text: 'golang', link: '/interview/golang/' },
              { text: 'mysql', link: '/interview/mysql/' },
              { text: 'redis', link: '/interview/redis/' },
              { text: 'nginx', link: '/interview/nginx/' },
              { text: '微服务', link: '/interview/microservice/' },
              { text: 'devops', link: '/interview/devops/' },
              { text: '算法', link: '/interview/algorithm/' },
              { text: 'http', link: '/interview/http/' },
              {text: "正则表达式", link: '/interview/regex/'},
            ],
          }
        ],
      },
      {
        text: '资源',
        link: '/resource/',
        items: [

          { text: '工具', 
              link: '/tools/',
              items: [
                {text: '绿色软件', link: '/resource/greesoftware/'},
              ]},
          { text: '娱乐', 
              link: '/media/',
              items: [
                { text: '书籍', link: '/resource/books/' },
                { text: '电影', link: '/resource/movies/' },
                { text: '实用网站', link: '/resource/webs/' },
              ]},
            {text: '博客搭建',
              link: '/blog/',
              items:[
                {text: '博客搭建', link: '/resource/hexoblog/'},
              ],
            },
          { text: '其他', 
              link: '/other/',
              items: [
                { text: '友情链接', link: '/resource/friends/'},
          ]},
        ],
      },
      {
        text: '索引',
        link: '/archives/',
        items: [
          { text: '分类', link: '/categories/' },
          { text: '标签', link: '/tags/' },
          { text: '归档', link: '/archives/' },
        ],
      },
    ],
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: '/img/favicon1.png', // 导航栏logo
    // logo: 'https://zhangtq-blog.oss-cn-hangzhou.aliyuncs.com/content_picture/logo.png', // 导航栏logo
    //repo: 'https://gitee.com/zhangtqup/vuepress-theme-vdoing.git', // 导航栏右侧生成Github链接
    // // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    //repoLabel: 'GitHub',
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
    docsRepo: 'https://gitee.com/zhangtqup/vuepress-theme-vdoing.git',
    docsDir: 'docs', // 编辑的文件夹
    // docsBranch: 'master', // 编辑的文件所在分支，默认master。 注意：如果你的分支是main则修改为main
    editLinks: true, // 启用编辑
    editLinkText: '编辑',

    //*** 以下是Vdoing主题相关配置，文档：https://doc.xugaoyi.com/pages/a20ce8/ ***//

    // category: false, // 是否打开分类功能，默认true
    // tag: false, // 是否打开标签功能，默认true
    // archive: false, // 是否打开归档功能，默认true
    // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

    // pageStyle: 'line', // 页面风格，可选值：'card'卡片 | 'line' 线（未设置bodyBgImg时才生效）， 默认'card'。 说明：card时背景显示灰色衬托出卡片样式，line时背景显示纯色，并且部分模块带线条边框

     bodyBgImg: [
      '/img/bannerBg2.png',
      // 'https://zhangtq-blog.oss-cn-hangzhou.aliyuncs.com/content_picture/image-20241126212334797.png',
    ], // body背景大图，默认无。 单张图片 String | 多张图片 Array, 多张图片时隔bodyBgImgInterval切换一张。
    bodyBgImgOpacity: 1, // body背景图透明度，选值 0.1~1.0, 默认0.5
    // bodyBgImgInterval: 15, // body多张背景图时的切换间隔, 默认15，单位s
    titleBadge: false, // 文章标题前的图标是否显示，默认true
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],
    contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 方格 | 2 横线 | 3 竖线 | 4 左斜线 | 5 右斜线 | 6 点状

    // updateBar: { // 最近更新栏
    //   showToArticle: false, // 显示到文章页底部，默认true
    //   moreArticle: '/archives', // “更多文章”跳转的页面，默认'/archives'
    //  },
    // rightMenuBar: true, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
    // sidebarOpen: false, // 初始状态是否打开左侧边栏，默认true
    // pageButton: false, // 是否显示快捷翻页按钮，默认true

    // 默认外观模式（用户未在页面手动修改过模式时才生效，否则以用户设置的模式为准），可选：'auto' | 'light' | 'dark' | 'read'，默认'auto'。
    defaultMode: 'dark',

    // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
    sidebar: { mode: 'structuring', collapsable: false},

    // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
    author: {
      name: 'zhangtq', // 必需
      link: 'https://www.cnblogs.com/zhangtq', // 可选的
    },

    //博主信息 (显示在首页侧边栏)
    blogger: {
      avatar: 'https://zhangtq-blog.oss-cn-hangzhou.aliyuncs.com/content_picture/avatar00.jpg',
      name: '摘星',
      slogan: '严于律己，宽以待人。',
    },

    // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.xugaoyi.com/pages/a20ce8/#social)
    social: {
      iconfontCssFile: '//at.alicdn.com/t/c/font_3541184_lpy87v4dgzo.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加。阿里图片库：https://www.iconfont.cn/
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:ztq1028354023@163.com',
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/StarsPicking',
        },
        {
          iconClass: 'icon-gitee',
          title: '码云',
          link: 'https://gitee.com/zhangtqup',
        },
        {
          iconClass: 'icon-cnblogs',
          title: '码云',
          link: 'https://www.cnblogs.com/zhangtq',
        },
        {
          iconClass: 'icon-rss',
          title: 'rss订阅',
          link: 'https://www.zhangtq.com/rss.xml',
        }
      ],
    },

    // 页脚信息
    footer: {
      createYear: 2019, // 博客创建年份
      copyrightInfo:
        '张学友 | <a href="https://www.cnblogs.com/zhangtq" target="_blank">MIT License</a></br> <a href="https://beian.miit.gov.cn" target="_blank">京ICP备2024070721号</a>', // 博客版权信息、备案信息等，支持a标签或换行标签</br>
    },

    // 扩展自动生成frontmatter。（当md文件的frontmatter不存在相应的字段时将自动添加。不会覆盖已有的数据。）
    extendFrontmatter: {
      author: {
        name: 'zhangtq',
        link: 'https://www.cnblogs.com/zhangtq'
      }
    },

    // 自定义hmtl(广告)模块
    // htmlModules
  },

  // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  head: [
    ['link', { rel: 'icon', href: '/img/favicon1.png' }], //favicons，资源放在public文件夹
    [
      'meta',
      {
        name: 'keywords',
        content: 'python、golang、微服务、数据库、devops',
      },
    ],
    ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }], // 百度统计的站长验证（你可以去掉）
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
    // [
    //   'script',
    //   {
    //     'data-ad-client': 'ca-pub-7828333725993554',
    //     async: 'async',
    //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    //   },
    // ], // 网站关联Google AdSense 与 html格式广告支持（你可以去掉）
//     [
//       'script',
//       {},
//       `var _hmt = _hmt || [];
//       (function() {
//         var hm = document.createElement("script");
//         hm.src = "https://hm.baidu.com/hm.js?43f3ba02341bd2907618a02b6fb4e9c5";
//         var s = document.getElementsByTagName("script")[0]; 
//         s.parentNode.insertBefore(hm, s);
// })();`,
//     ],
  ],


  // 插件配置
  plugins: <UserPlugins>[
    [
      "sitemap", // 网站地图
      {
        hostname: WEB_SITE,
      },
    ],

    'vuepress-plugin-baidu-autopush', // 百度自动推送

    [
      'vuepress-plugin-baidu-tongji', // 百度统计
      {
        hm: baiduCode,
      },
    ],

    // 全文搜索。 ⚠️注意：此插件会在打开网站时多加载部分js文件用于搜索，导致初次访问网站变慢。如在意初次访问速度的话可以不使用此插件！（推荐：vuepress-plugin-thirdparty-search）
    // 'fulltext-search',

    // 可以添加第三方搜索链接的搜索框（继承原官方搜索框的配置参数）
    // [
    //   'thirdparty-search',
    //   {
    //     thirdparty: [
    //       {
    //         title: '在MDN中搜索',
    //         frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
    //         behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
    //       },
    //       {
    //         title: '在Runoob中搜索',
    //         frontUrl: 'https://www.runoob.com/?s=',
    //       },
    //       {
    //         title: '在Vue API中搜索',
    //         frontUrl: 'https://cn.vuejs.org/v2/api/#',
    //       },
    //       {
    //         title: '在Bing中搜索',
    //         frontUrl: 'https://cn.bing.com/search?q=',
    //       },
    //       {
    //         title: '通过百度搜索本站的',
    //         frontUrl: `https://www.baidu.com/s?wd=site%3A${DOMAIN_NAME}%20`,
    //       },
    //     ],
    //   }
    // ],

    [
      'one-click-copy', // 代码块复制按钮
      {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
        copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
        duration: 1000, // prompt message display time.
        showInMobile: false, // whether to display on the mobile side, default: false.
      },
    ],
    [
      'vuepress-plugin-zooming', // 放大图片
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
        options: {
          bgColor: 'rgba(0,0,0,0.6)',
        },
      },
    ],
    //订阅 vuepress-plugin-feed
    [ 
      'feed', 
      {
        canonical_base: WEB_SITE,
        count: 5000,
        content: true,
        feed_options: {
          title: "摘星's Blog",
          description: "This is my personal feed!",
          // generator: 'awesome',
          author: {
            name: "zhangtq",
            email: "1028354023@qq.com",
            link: "https://www.zhangtq.com"
          }
        },
      
      }
    ],


    // 评论
    // [
    //   'vuepress-plugin-comment', // 评论
    //   {
    //     choosen: 'gitalk',
    //     options: {
    //       clientID: '075c247c526e575a5041',
    //       clientSecret: '7e7efb2a96c03182d0613c087d83773e61ecd6cb',
    //       repo: 'zhangtq_blog_Gittalk', // GitHub 仓库
    //       owner: 'DeepOcean299', // GitHub仓库所有者
    //       admin: ['DeepOcean299'], // 对仓库有写权限的人
    //       distractionFreeMode: false,
    //       pagerDirection: 'last', // 'first'正序 | 'last'倒序
    //       id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
    //       title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
    //       labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
    //       body:
    //         '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
    //     },
    //   },
    // ],
    [
      '@vuepress/last-updated', // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          return dayjs(timestamp).format('YYYY/MM/DD HH:mm:ss')
        },
      },
    ],
  ],

  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },

  // 监听文件变化并重新构建
  extraWatchFiles: [
    '.vuepress/config.ts',
    '.vuepress/config/htmlModules.ts',
  ]
})


