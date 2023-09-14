import { createRouter, createWebHistory } from 'vue-router'
import { useCookies } from "vue3-cookies";
const {cookies} = useCookies();
// import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProdView.vue')
  },
  {
    path:'/cart',
    name: 'cart',
    component: () => import('../views/CartView.vue'),
    beforeEnter(){
      if (!cookies.get('user')) {
        router.push('/login')
      }
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/ProfileView.vue'),
    beforeEnter(){
      if (!cookies.get('user')) {
        router.push('/login')
      }
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue'),
    beforeEnter(){
      if (!cookies.get('user')) {
        router.push('/adminlogin')
      }
    }
  },
  // adminLogin
  {
    path: "/adminlogin",
    name: "adminLogin", 
    component: () => import ( '../components/AdminLogin.vue'),
    // afterEnter(){
    //     if(cookies.get('user')){
    //       router.push ('/product/:id')
    //     }
    // }
  },

  {
    path: "/product/:id",
    name: "singleProd", 
    component: () => import ( '../components/SingleProd.vue'),
    beforeEnter(){
      if (!cookies.get('user')) {
        router.push('/login')
      }
    }
  },
  // include paths for the categories

  {
    path: "/login",
    name: "loginPage", 
    component: () => import ( '../components/LogIn.vue'),
    // afterEnter(){
    //     if(!cookies.get('user')){
    //       router.push ('/product/:id')
    //     }
    // }
  },

  // {
  //   path: "/logout",
  //   name: "logout", 
  //   component: () => import ( '../components/SingleProd.vue'),
  //   beforeEnter(){
  //     if (!cookies.get('user')) {
  //       router.push('/logout')
  //     }
  //   }
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
