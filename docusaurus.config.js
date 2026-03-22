// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "AI Core Docs",
  tagline: "Modern documentation for your AI platform",
  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },

  // GitHub Pages 
  url: "https://zweixin798.github.io",
  baseUrl: "/modern-documentation/",

  organizationName: "zweixin798",
  projectName: "modern-documentation",

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          editUrl:
            "https://github.com/zweixin798/modern-documentation/tree/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/zweixin798/modern-documentation/tree/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig: ({
    image: "img/docusaurus-social-card.jpg",

    navbar: {
      title: "AI Core Docs",
      logo: {
        alt: "Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        {to: "/blog", label: "Blog", position: "left"},
        {
          href: "https://github.com/zweixin798/modern-documentation",
          label: "GitHub",
          position: "right",
        },
      ],
    },

    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {label: "Getting Started", to: "/docs/intro"},
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/zweixin798/modern-documentation",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AI Core Docs`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;