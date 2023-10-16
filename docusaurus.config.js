// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "EVN",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-test-site.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "📚 EVN",
        hideOnScroll: true,
        // logo: {
        //   alt: "Site Logo",
        //   src: "img/logo.svg",
        //   srcDark: "img/logo_dark.svg",
        //   href: "https://docusaurus.io/",
        //   target: "_self",
        //   width: 32,
        //   height: 32,
        // },
        items: [
          { to: "/blog", label: "👨🏻‍🌾 博客", position: "right" },
          {
            position: "right",
            label: "👨🏻‍🎓 维基",
            items: [
              {
                label: "基础入门",
                to: "/getting-started",
              },
              {
                label: "程序设计语言",
                to: "/programming-language",
              },
              {
                label: "数据结构与算法",
                to: "/structures-algorithms",
              },
              {
                label: "计算机组成",
                to: "/computer-composition",
              },
              {
                label: "计算机网络",
                to: "/computer-network",
              },
              {
                label: "计算机安全",
                to: "/computer-security",
              },
              {
                label: "操作系统",
                to: "/operating-system",
              },
              {
                label: "数据库系统",
                to: "/database-system",
              },
              {
                label: "软件工程",
                to: "/software-engineering",
              },
              {
                label: "编译原理",
                to: "/compilation-principle",
              },
            ],
          },
          {
            position: "right",
            label: "👨‍💻 职业",
            items: [
              {
                label: "求职之路",
                to: "/roadmap",
              },
              {
                label: "SRE 工程师",
                to: "/sre-engineer",
              },
              {
                label: "Data 工程师",
                to: "/data-engineer",
              },
            ],
          },
          {
            position: "right",
            label: "💼 组织",
            items: [
              {
                label: "自由社区",
                to: "/org",
              },
              {
                label: "现代企业",
                to: "/com",
              },
              {
                label: "国家政府",
                to: "/gov",
              },
            ],
          },
          { to: "/life", label: "🚴🏻‍♀️ 生活", position: "right" },
          { to: "/journal", label: "📽️ 日志", position: "right" },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
