export default [
  { path: '/', component: '@/layouts/BaseLayout' },
  {
    path: '/tag/index/:id',
    component: '@/layouts/BaseLayout', //模板
    routes: [
      {
        name: '标签',
        icon: 'TagsOutlined',
        component: '@/pages/TagIndex',
      },
    ],
  },
];
