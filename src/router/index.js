import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Class from '../views/Class.vue';
import AdminPanel from '../views/AdminPanel.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/class/:id',
    name: 'Class',
    component: Class,
  },
  {
    path: '/adminpanel',
    name: 'Admin',
    component: AdminPanel,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;