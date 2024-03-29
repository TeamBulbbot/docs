// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Bulbbot",
  tagline: "We take Discord Moderation to the next level",
  url: "https://bulbbot.rocks",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "TeamBulbbot",
  projectName: "bulbbot",
  titleDelimiter: "-",

  themeConfig: {
    metadata: [
      {
        name: "og:image",
        content:
          "https://github.com/TeamBulbbot/bulbbot/blob/master/assets/Logo.png?raw=true",
      },
      {
        name: "theme-color",
        content: "#ffc300",
      },
      {
        name: "twitter:card",
        content: "summary",
      },
    ],
    colorMode: {
      defaultMode: "dark",
    },
    navbar: {
      title: "Bulbbot Documentation",
      logo: {
        alt: "Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          href: "https://bulbbot.rocks/invite",
          label: "Invite Bot",
          position: "left",
        },
        {
          href: "https://bulbbot.rocks/discord",
          className: "navbar-item-discord",
          position: "right",
        },
        {
          href: "https://github.com/TeamBulbbot/bulbbot",
          className: "navbar-item-github",
          position: "right",
        },
      ],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/TeamBulbbot/docs/blob/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};

export default config;
