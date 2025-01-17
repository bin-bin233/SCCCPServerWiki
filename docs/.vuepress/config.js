module.exports = {
  head: [
    [
      "link",
      { rel: "icon", href: "/assets/img/server-icon.png"}
    ]
  ],
  title: "SCCCP Community Server Wiki",
  description: "SCCCPServerWikiMark",
  themeConfig: {
    logo: "./assets/img/server-icon.png",
    lastUpdated: "最后更新",
    nav: [
      { text: "主页", link: "/" },
      { text: "服务器介绍", link: "/preface" },
      { text: "目录", link: "/dirs" },
      { text: "论坛社区", link: "https://bbs.playl.net/forums/scccp/" },
    ],
    sidebar: [
      ["/", "主页"],
      ["/guide", "新手快速入门"],
      {
        title: "教程目录",
        path: "/dirs",
        collapsable: false,
        sidebarDepth: 1,
        children: [
          ["/preface", "服务器介绍"],
          {
            title: "命令",
            collapsable: true,
            sidebarDepth: 1,
            children: [
              ["/command/tpa", "Tpa(玩家间传送)"],
              ["/command/tpoint", "Tpoint(传送点功能)"],
              ["/command/diffmod", "df(难度调整功能)"],
              ["/command/landclaim", "landclaim(私人领地标记)"],
              ["/command/coreprotect", "c(破坏/容器交互查询)"],
              ["/command/other", "杂项命令"]
            ],
          }
        ]
      },
      ["/updatelog/", "服务器更新日志"],
    ],

    repo: "SCCCP-Team/SCCCPServerWiki",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "在Github上编辑",
  },
  plugins: {
    "@vuepress-reco/bgm-player": {
      audios: [
        {
          name: "Otherside",
          artist: "Lena Raine",
          url: "/assets/bgm/Otherside.ogg",
          cover: "/assets/bgm/Otherside.png",
        },
      ],
      autoShrink: true,
      shrinkMode: "float",
    },
  },
};
