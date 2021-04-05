import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Jobs from '../views/jobs/Jobs.vue';
import JobDetails from '../views/jobs/JobDetails.vue';
import NotFound from '../views/NotFound.vue';
import CompositionApi from '../views/CompositionApi.vue';
// import Composables from '../views/Composables.vue';
import Composables from '../views/posts/Composables.vue';
import PostDetails from '../views/posts/PostDetails.vue';
import FormVue from '../views/FormVue.vue';

export const routes = [
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
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs,
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
    props: true,
  },
  {
    path: '/composition-api',
    name: 'CompositionApi',
    component: CompositionApi,
  },
  {
    path: '/composition-api/:id',
    name: 'PostDetails',
    component: PostDetails,
    props: true,
  },
  {
    path: '/composables',
    name: 'Composables',
    component: Composables,
  },
  {
    path: '/form',
    name: 'FormVue',
    component: FormVue,
  },
  // redirect
  {
    path: '/all-jobs',
    redirect: '/jobs',
  },
  // catch all 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
