import Vue from 'vue';
import VueRouter from 'vue-router';
import Apitest from '../views/Apitest.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/apitest',
    name: 'Apitest',
    component: Apitest,
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
