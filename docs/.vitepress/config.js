// vitepress/config.js
module.exports = {
  title: "北鸟南游的博客", // 网站标题
  description: "前端开发工程师", //网站描述
  base: "/", //  部署时的路径 默认 /  可以使用二级地址 /base/
  // lang: 'en-US', //语言
  // 网页头部配置，引入需要图标，css，js
  // head: [
  //   // 改变title的图标
  //   [
  //     'link',
  //     {
  //       rel: 'icon',
  //       href: '/img/linktolink.png',//图片放在public文件夹下
  //     },
  //   ],
  // ],
  // 主题配置
  themeConfig: {
    repo: "https://github.com/shenshuai89/newblog", // 你的 github 仓库地址，网页的右上角会跳转
    //   头部导航
    nav: [
      { text: "首页", link: "/" },
      {
        text: "前端技术",
        link: "/front/",
        items: [
          { text: "javascript", link: "/front/javascript/" },
          {
            text: "界面",
            link: "/front/interface/",
            items: [
              { text: "html", link: "/front/interface/html/" },
              { text: "css", link: "/front/interface/css/" },
            ],
          },
        ],
      },
      {
        text: "其它技术",
        link: "/other/",
        items: [
          { text: "计算机基础", link: "/other/computer/" },
          { text: "后端语言", link: "/other/backend/" },
          { text: "linux", link: "/other/linux/" },
          { text: "mysql", link: "/other/mysql/" },
          { text: "工具类", link: "/other/tool/" },
        ],
      },
      //   结尾有 / 链接到目录，没有 / 链接到页面，地址会出现一个.html
      {
        text: "专题小册",
        link: "/theme/",
        items: [
          { text: "面试相关", link: "/theme/interview/" },
          { text: "图形学入门", link: "/theme/graphics/" },
          { text: "入门算法", link: "/theme/algorithm/" },
        ],
      },
      //   {
      //     text: "无关技术",
      //     link: "/experience/",
      //     items: [
      //       { text: "个人经历", link: "/experience/" },
      //       { text: "社会观点", link: "/experience/" },
      //       { text: "其它杂谈", link: "/experience/" },
      //     ],
      //   },
      {
        text: "关于我",
        link: "/me/",
      },
    ],
    //   侧边导航
    sidebar: {
      "/front/": [
        {
          text: "Javascript",
          children: [
            {
              text: "原生js",
              children: [
                {
                  text: "js原型继承",
                  link: "/front/javascript/js/prototype",
                },
              ],
            },
            {
              text: "vue",
              children: [
                {
                  text: "vue生命周期",
                  link: "/front/javascript/vue/lifecycle",
                },
              ],
            },
            {
              text: "react",
              children: [
                {
                  text: "react生命周期",
                  link: "/front/javascript/react/lifecycle",
                },
              ],
            },
            { text: "其它框架", link: "/front/javascript/other/" },
          ],
        },
        {
          text: "界面",
          children: [
            {
              text: "HTML",
              link: "/front/interface/html/",
            },
            {
              text: "css",
              link: "/front/interface/css/",
            },
          ],
        },
      ],
      "/other/": [
        {
          text: "计算机基础",
          children: [{ text: "计算机原理", link: "/other/computer/principle" }],
        },
        {
          text: "后端语言",
          children: [
            { text: "java", link: "/other/backend/java" },
            { text: "python", link: "/other/backend/python" },
            { text: "go", link: "/other/backend/go" },
          ],
        },
        {
          text: "linux",
          children: [
            { text: "linux", link: "/other/linux/" },
            { text: "shell", link: "/other/linux/shell" },
          ],
        },
        {
          text: "mysql",
          link: "/other/mysql/",
        },
        {
          text: "工具类",
          children: [
            { text: "git", link: "/other/tool/git" },
            { text: "Docker", link: "/other/tool/docker" },
          ],
        },
      ],
      "/theme/": [
        {
          text: "面试相关",
          children: [
            { text: "html面试题", link: "/theme/interview/html" },
            { text: "css面试题", link: "/theme/interview/css" },
            { text: "js面试题", link: "/theme/interview/js" },
          ],
        },
        {
          text: "图形学入门",
          link: "/theme/graphics",
        },
        {
          text: "入门算法",
          link: "/theme/algorithm",
        },
      ],
      me: [{ text: "自我介绍", link: "/me/" }],
    },
  },
};
