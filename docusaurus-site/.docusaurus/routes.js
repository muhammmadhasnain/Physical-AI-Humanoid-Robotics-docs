import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '5fc'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'd3d'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'f70'),
            routes: [
              {
                path: '/docs/Chapter 1/glossary',
                component: ComponentCreator('/docs/Chapter 1/glossary', 'd4d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Chapter 1/Introduction to Physical AI & Humanoid Robotics.',
                component: ComponentCreator('/docs/Chapter 1/Introduction to Physical AI & Humanoid Robotics.', '06a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Chapter 1/weekly-objectives',
                component: ComponentCreator('/docs/Chapter 1/weekly-objectives', '6f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/chapter-2/',
                component: ComponentCreator('/docs/chapter-2/', '12c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/chapter-2/module-1-ros2',
                component: ComponentCreator('/docs/chapter-2/module-1-ros2', '4ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/chapter-2/weekly-plan',
                component: ComponentCreator('/docs/chapter-2/weekly-plan', '135'),
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
    path: '*',
    component: ComponentCreator('*'),
  },
];
