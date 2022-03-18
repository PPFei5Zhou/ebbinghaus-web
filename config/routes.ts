export default [
  { path: '/', component: '@/pages/index' },
  {
    name: '知识库',
    path: '/library',
    exact: true,
    component: "@/pages/library/Index",
    icon: 'BookOutlined'
  }
]
