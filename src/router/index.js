import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/modules/landingPage/views/HomePage.vue'
// import LoginView from '../views/LoginView.vue'
import homeRoutes from '@/modules/homePage/routes.js';
// import AuthRoutes from '@/modules/auth/routes'
import LandingPage from '@/modules/landingPage/routes.js';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue'),
    },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: LoginView

    // },
    // ...homeRoutes,
    // ...AuthRoutes,
    // ...LandingPage
  ],
})


const isAuthenticated = () => {
  const token = sessionStorage.getItem('token')
  return !!token 
}


const publicRoutes = ['/', '/about', '/login', '/register', '/recover','/recover-code','/change-password','/change-success']


router.beforeEach((to, from, next) => {
  if (!publicRoutes.includes(to.path) && !isAuthenticated()) {
    next('/login')
  } else {
    next() 
  }
})


export default router
