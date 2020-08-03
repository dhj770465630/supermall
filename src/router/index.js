import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 避免报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
// 


const home = () => import('../views/home/home')
const cart = () => import('../views/cart/cart')
const category = () => import('../views/category/category')
const profile = () => import('../views/profile/profile')

export default new Router({
  routes: [
    {
      path:'',
      redirect: '/home'
    },
    {
      path:'/home',
      component: home
    },
    {
      path:'/cart',
      component: cart
    },
    {
      path:'/category',
      component: category
    },
    {
      path:'/profile',
      component: profile
    },
  ],
  
  mode:'history',
  
})
