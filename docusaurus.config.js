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
        title: "EVN",
        style: "dark",
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
          { 
            label: "choeur", 
            position: "right",
            items: [
              {
                label: "Le choeur",
                to: "/le-choeur",
              },
              {
                label: "Composition",
                to: "/composition",
              },
              {
                label: "Fonctionnement",
                to: "/fonctionnement",
              },
               {
                label: "Recrutement",
                to: "/recrutement",
              },
            ],
          },
          {
            position: "right",
            label: "Direction",
            items: [
              {
                label: "Chef de choeur",
                to: "/chef-de-choeur",
              },
              {
                label: "Anciens chefs",
                to: "/anciens-chefs",
              },
            ],
          },
          {
            position: "right",
            label: "Répertoire",
            to: "/repertoire",
          },
          {
            position: "right",
            label: "Concerts",
            items: [
              {
                label: "A venir",
                to: "/a-venir",
              },
              {
                label: "Archives",
                to: "/archives",
              },
              
            ],
          },
          {
            position: "right",
            label: "Médias",
            items: [
              {
                label: "Albums photos",
                to: "/albums-photos",
              },
              {
                label: "Vidéos",
                to: "/videos",
              },
              {
                label: "Affiches",
                to: "/affiches",
              },
            ],
          },
          {
            position: "right",
            label: "contacts",
            to: "/contacts",
          }  
        ],
      },
    })
};

module.exports = config;
