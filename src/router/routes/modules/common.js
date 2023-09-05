// 路由规则
const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import ('@/views/home/home.vue'),
  },
]

export default routes
