import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './../components/Login.vue'
import Home from './../components/Home.vue'
import Layout from './../components/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {name: 'login', path: '/', component: Login},
  {
    path: '/home',
    component: Layout,
    children: [
      {name: 'Home', path: '/', component: Home}
  ]}
]

const router = new VueRouter({
  routes
})

export default router
