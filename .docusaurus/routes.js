import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/modern-documentation/blog',
    component: ComponentCreator('/modern-documentation/blog', '646'),
    exact: true
  },
  {
    path: '/modern-documentation/blog/ai-core-docs-launch',
    component: ComponentCreator('/modern-documentation/blog/ai-core-docs-launch', 'cc3'),
    exact: true
  },
  {
    path: '/modern-documentation/blog/archive',
    component: ComponentCreator('/modern-documentation/blog/archive', '6dd'),
    exact: true
  },
  {
    path: '/modern-documentation/blog/authors',
    component: ComponentCreator('/modern-documentation/blog/authors', 'aa0'),
    exact: true
  },
  {
    path: '/modern-documentation/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/modern-documentation/blog/authors/all-sebastien-lorber-articles', '576'),
    exact: true
  },
  {
    path: '/modern-documentation/blog/authors/yangshun',
    component: ComponentCreator('/modern-documentation/blog/authors/yangshun', 'f0e'),
    exact: true
  },
  {
    path: '/modern-documentation/blog/authors/zweixin-798',
    component: ComponentCreator('/modern-documentation/blog/authors/zweixin-798', 'ead'),
    exact: true
  },
  {
    path: '/modern-documentation/blog/gpt-4o-release-notes',
    component: ComponentCreator('/modern-documentation/blog/gpt-4o-release-notes', '1a6'),
    exact: true
  },
  {
    path: '/modern-documentation/blog/gpt-4o-release-notes',
    component: ComponentCreator('/modern-documentation/blog/gpt-4o-release-notes', 'd06'),
    exact: true
  },
  {
    path: '/modern-documentation/blog/long-blog-post',
    component: ComponentCreator('/modern-documentation/blog/long-blog-post', '517'),
    exact: true
  },
  {
    path: '/modern-documentation/blog/mdx-blog-post',
    component: ComponentCreator('/modern-documentation/blog/mdx-blog-post', '5e0'),
    exact: true
  },
  {
    path: '/modern-documentation/blog/tags',
    component: ComponentCreator('/modern-documentation/blog/tags', '338'),
    exact: true
  },
  {
    path: '/modern-documentation/blog/tags/changelog',
    component: ComponentCreator('/modern-documentation/blog/tags/changelog', 'd5c'),
    exact: true
  },
  {
    path: '/modern-documentation/blog/tags/docusaurus',
    component: ComponentCreator('/modern-documentation/blog/tags/docusaurus', '7bb'),
    exact: true
  },
  {
    path: '/modern-documentation/blog/tags/facebook',
    component: ComponentCreator('/modern-documentation/blog/tags/facebook', '367'),
    exact: true
  },
  {
    path: '/modern-documentation/blog/tags/hello',
    component: ComponentCreator('/modern-documentation/blog/tags/hello', 'c1f'),
    exact: true
  },
  {
    path: '/modern-documentation/blog/vibecoding工具intro',
    component: ComponentCreator('/modern-documentation/blog/vibecoding工具intro', 'aea'),
    exact: true
  },
  {
    path: '/modern-documentation/blog/welcome',
    component: ComponentCreator('/modern-documentation/blog/welcome', '5b7'),
    exact: true
  },
  {
    path: '/modern-documentation/markdown-page',
    component: ComponentCreator('/modern-documentation/markdown-page', 'd1b'),
    exact: true
  },
  {
    path: '/modern-documentation/docs',
    component: ComponentCreator('/modern-documentation/docs', 'a79'),
    routes: [
      {
        path: '/modern-documentation/docs',
        component: ComponentCreator('/modern-documentation/docs', '3cb'),
        routes: [
          {
            path: '/modern-documentation/docs',
            component: ComponentCreator('/modern-documentation/docs', '08b'),
            routes: [
              {
                path: '/modern-documentation/docs/concepts/ai-workflow',
                component: ComponentCreator('/modern-documentation/docs/concepts/ai-workflow', 'e1d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/modern-documentation/docs/concepts/token-economics',
                component: ComponentCreator('/modern-documentation/docs/concepts/token-economics', 'a01'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/modern-documentation/docs/concepts/user-behavior',
                component: ComponentCreator('/modern-documentation/docs/concepts/user-behavior', 'b3d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/modern-documentation/docs/faq/common-issues',
                component: ComponentCreator('/modern-documentation/docs/faq/common-issues', 'a6d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/modern-documentation/docs/intro',
                component: ComponentCreator('/modern-documentation/docs/intro', 'e5d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/modern-documentation/docs/prompt-engineering-guide',
                component: ComponentCreator('/modern-documentation/docs/prompt-engineering-guide', 'b71'),
                exact: true
              },
              {
                path: '/modern-documentation/docs/quickstart/',
                component: ComponentCreator('/modern-documentation/docs/quickstart/', '969'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/modern-documentation/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/modern-documentation/docs/tutorial-basics/congratulations', '92a'),
                exact: true
              },
              {
                path: '/modern-documentation/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/modern-documentation/docs/tutorial-basics/create-a-blog-post', 'b58'),
                exact: true
              },
              {
                path: '/modern-documentation/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/modern-documentation/docs/tutorial-basics/create-a-document', 'a4a'),
                exact: true
              },
              {
                path: '/modern-documentation/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/modern-documentation/docs/tutorial-basics/create-a-page', 'baa'),
                exact: true
              },
              {
                path: '/modern-documentation/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/modern-documentation/docs/tutorial-basics/deploy-your-site', '4a7'),
                exact: true
              },
              {
                path: '/modern-documentation/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/modern-documentation/docs/tutorial-basics/markdown-features', 'c16'),
                exact: true
              },
              {
                path: '/modern-documentation/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/modern-documentation/docs/tutorial-extras/manage-docs-versions', 'f64'),
                exact: true
              },
              {
                path: '/modern-documentation/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/modern-documentation/docs/tutorial-extras/translate-your-site', '221'),
                exact: true
              },
              {
                path: '/modern-documentation/docs/vibe-coding-guide',
                component: ComponentCreator('/modern-documentation/docs/vibe-coding-guide', 'b81'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/modern-documentation/',
    component: ComponentCreator('/modern-documentation/', 'a11'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
