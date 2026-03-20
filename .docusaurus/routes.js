import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/modern-documentation/blog/',
    component: ComponentCreator('/modern-documentation/blog/', '7a5'),
    exact: true
  },
  {
    path: '/modern-documentation/blog/ai-core-docs-launch/',
    component: ComponentCreator('/modern-documentation/blog/ai-core-docs-launch/', 'f86'),
    exact: true
  },
  {
    path: '/modern-documentation/blog/archive/',
    component: ComponentCreator('/modern-documentation/blog/archive/', '842'),
    exact: true
  },
  {
    path: '/modern-documentation/blog/authors/',
    component: ComponentCreator('/modern-documentation/blog/authors/', '9fe'),
    exact: true
  },
  {
    path: '/modern-documentation/blog/authors/all-sebastien-lorber-articles/',
    component: ComponentCreator('/modern-documentation/blog/authors/all-sebastien-lorber-articles/', '4b9'),
    exact: true
  },
  {
    path: '/modern-documentation/blog/authors/yangshun/',
    component: ComponentCreator('/modern-documentation/blog/authors/yangshun/', 'e3a'),
    exact: true
  },
  {
    path: '/modern-documentation/blog/authors/zweixin-798/',
    component: ComponentCreator('/modern-documentation/blog/authors/zweixin-798/', '26f'),
    exact: true
  },
  {
    path: '/modern-documentation/blog/gpt-4o-release-notes/',
    component: ComponentCreator('/modern-documentation/blog/gpt-4o-release-notes/', 'f9c'),
    exact: true
  },
  {
    path: '/modern-documentation/blog/long-blog-post/',
    component: ComponentCreator('/modern-documentation/blog/long-blog-post/', 'a8d'),
    exact: true
  },
  {
    path: '/modern-documentation/blog/mdx-blog-post/',
    component: ComponentCreator('/modern-documentation/blog/mdx-blog-post/', '395'),
    exact: true
  },
  {
    path: '/modern-documentation/blog/tags/',
    component: ComponentCreator('/modern-documentation/blog/tags/', '164'),
    exact: true
  },
  {
    path: '/modern-documentation/blog/tags/changelog/',
    component: ComponentCreator('/modern-documentation/blog/tags/changelog/', '2df'),
    exact: true
  },
  {
    path: '/modern-documentation/blog/tags/docusaurus/',
    component: ComponentCreator('/modern-documentation/blog/tags/docusaurus/', '8b3'),
    exact: true
  },
  {
    path: '/modern-documentation/blog/tags/facebook/',
    component: ComponentCreator('/modern-documentation/blog/tags/facebook/', 'fbe'),
    exact: true
  },
  {
    path: '/modern-documentation/blog/tags/hello/',
    component: ComponentCreator('/modern-documentation/blog/tags/hello/', '44b'),
    exact: true
  },
  {
    path: '/modern-documentation/blog/welcome/',
    component: ComponentCreator('/modern-documentation/blog/welcome/', '34c'),
    exact: true
  },
  {
    path: '/modern-documentation/markdown-page/',
    component: ComponentCreator('/modern-documentation/markdown-page/', 'add'),
    exact: true
  },
  {
    path: '/modern-documentation/api/',
    component: ComponentCreator('/modern-documentation/api/', '7c9'),
    routes: [
      {
        path: '/modern-documentation/api/',
        component: ComponentCreator('/modern-documentation/api/', 'dd6'),
        routes: [
          {
            path: '/modern-documentation/api/',
            component: ComponentCreator('/modern-documentation/api/', '816'),
            routes: [
              {
                path: '/modern-documentation/api/',
                component: ComponentCreator('/modern-documentation/api/', '29b'),
                exact: true,
                sidebar: "apisidebar"
              },
              {
                path: '/modern-documentation/api/ai-core-api/',
                component: ComponentCreator('/modern-documentation/api/ai-core-api/', '45c'),
                exact: true,
                sidebar: "apisidebar"
              },
              {
                path: '/modern-documentation/api/create-chat-completion/',
                component: ComponentCreator('/modern-documentation/api/create-chat-completion/', 'd0f'),
                exact: true,
                sidebar: "apisidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/modern-documentation/docs/',
    component: ComponentCreator('/modern-documentation/docs/', '1a7'),
    routes: [
      {
        path: '/modern-documentation/docs/',
        component: ComponentCreator('/modern-documentation/docs/', '2c2'),
        routes: [
          {
            path: '/modern-documentation/docs/',
            component: ComponentCreator('/modern-documentation/docs/', '961'),
            routes: [
              {
                path: '/modern-documentation/docs/category/tutorial---basics/',
                component: ComponentCreator('/modern-documentation/docs/category/tutorial---basics/', 'c35'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/modern-documentation/docs/category/tutorial---extras/',
                component: ComponentCreator('/modern-documentation/docs/category/tutorial---extras/', 'd46'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/modern-documentation/docs/intro/',
                component: ComponentCreator('/modern-documentation/docs/intro/', '92e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/modern-documentation/docs/prompt-engineering-guide/',
                component: ComponentCreator('/modern-documentation/docs/prompt-engineering-guide/', '3d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/modern-documentation/docs/tutorial-basics/congratulations/',
                component: ComponentCreator('/modern-documentation/docs/tutorial-basics/congratulations/', '0aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/modern-documentation/docs/tutorial-basics/create-a-blog-post/',
                component: ComponentCreator('/modern-documentation/docs/tutorial-basics/create-a-blog-post/', '064'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/modern-documentation/docs/tutorial-basics/create-a-document/',
                component: ComponentCreator('/modern-documentation/docs/tutorial-basics/create-a-document/', 'a73'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/modern-documentation/docs/tutorial-basics/create-a-page/',
                component: ComponentCreator('/modern-documentation/docs/tutorial-basics/create-a-page/', '952'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/modern-documentation/docs/tutorial-basics/deploy-your-site/',
                component: ComponentCreator('/modern-documentation/docs/tutorial-basics/deploy-your-site/', '55d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/modern-documentation/docs/tutorial-basics/markdown-features/',
                component: ComponentCreator('/modern-documentation/docs/tutorial-basics/markdown-features/', '4ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/modern-documentation/docs/tutorial-extras/manage-docs-versions/',
                component: ComponentCreator('/modern-documentation/docs/tutorial-extras/manage-docs-versions/', '1fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/modern-documentation/docs/tutorial-extras/translate-your-site/',
                component: ComponentCreator('/modern-documentation/docs/tutorial-extras/translate-your-site/', '038'),
                exact: true,
                sidebar: "tutorialSidebar"
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
