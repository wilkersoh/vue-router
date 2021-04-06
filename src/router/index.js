import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import PassParamsFromRoute from '../views/passParams/PassParamsFromRoute.vue';
import OtherPage from '../views/passParams/OtherPage.vue';
import NotFound from '../views/NotFound.vue';
import CompositionApi from '../views/CompositionApi.vue';
import Composables from '../views/posts/Composables.vue';
import PostDetails from '../views/posts/PostDetails.vue';
import FormVue from '../views/FormVue.vue';
import DynamicComponent from '../views/DynamicComponent.vue';
import TeleportVue from '../views/TeleportVue.vue';
import MixinsOrHook from '../views/MixinsOrHook.vue';
import WatchVue from '../views/WatchVue.vue';
import TemplateRef from '../views/TemplateRef.vue';
import PropsWithComposition from '../views/PropsWithComposition.vue';

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
    path: '/pass-params-from-route',
    name: 'PassParamsFromRoute',
    component: PassParamsFromRoute,
    // children: [
    //   {
    //     path: '/jobs/:id',
    //     name: 'OtherPage',
    //     component: OtherPage,
    //     props: true,
    //   },
    // ],
  },
  {
    path: '/jobs/:id',
    name: 'OtherPage',
    component: OtherPage,
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
  {
    path: '/dynamic-component',
    name: 'DynamicComponent',
    component: DynamicComponent,
  },
  {
    path: '/teleport',
    name: 'TeleportVue',
    component: TeleportVue,
  },
  {
    path: '/mixins-or-hook',
    name: 'MixinsOrHook',
    component: MixinsOrHook,
  },
  {
    path: '/watch',
    name: 'WatchVue',
    component: WatchVue,
  },
  {
    path: '/template-ref',
    name: 'TemplateRef',
    component: TemplateRef,
  },
  {
    path: '/props-composition',
    name: 'PropsWithComposition',
    component: PropsWithComposition,
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
