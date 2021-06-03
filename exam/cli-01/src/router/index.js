import Vue from 'vue';
import VueRouter from 'vue-router';
import config from '@/config';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'Home',
    },
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: 'About',
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/simple',
    name: 'Simple',
    meta: {
      title: config.title,
    },
    component: () => import('../views/Simple'),
  },
  {
    path: '/pdf',
    name: 'pdf',
    component: () => import('../views/pdf'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
});

export default router;
