// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
module.exports = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro', // 如果你有 intro 首页
    },
    {
      type: 'category',
      label: 'Concepts',
      items: [
        'concepts/ai-workflow',
        'concepts/token-economics',
        'concepts/user-behavior',
      ],
    },
    {
      type: 'category',
      label: 'FAQ',
      items: [
        'faq/common-issues',
      ],
    },
    {
      type: 'doc',
      id: 'quickstart/quickstart',
    },
  ],
};
