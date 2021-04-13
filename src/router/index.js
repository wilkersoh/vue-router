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
import VeeValidateForm from '../views/VeeValidateForm.vue';
import DefineComponentVue from '../views/DefineComponentVue.vue';
import MutilpleComponentInOneFile from '../views/MutilpleComponentInOneFile.vue';
import JSXComponent from '../views/JSXComponent.vue';
import LazyLoadingComponent from '../views/LazyLoadingComponent.vue';
import HRender from '../views/HRender.vue';
import FormValidateYup from '../views/form';
import DirectiveCustom from '../views/DirectiveCustom';
import Transition from '../views/Transition';

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
    props: true, // pass params as props if you turn on this
    beforeEnter: (to, from, next) => {
      const isValidId = Number.isInteger(Number(to.params.id));
      next(isValidId); // id is string, so it cannot be click
    },
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
  {
    path: '/vee-validate',
    name: 'VeeValidateForm',
    component: VeeValidateForm,
  },
  {
    path: '/define-component',
    name: 'DefineComponentVue',
    component: DefineComponentVue,
  },
  {
    path: '/multiple-component-in-file',
    name: 'MutilpleComponentInOneFile',
    component: MutilpleComponentInOneFile,
  },
  {
    path: '/jsx-component',
    name: 'JSXComponent',
    component: JSXComponent,
  },
  {
    path: '/lazy-loading-component',
    name: 'LazyLoadingComponent',
    component: LazyLoadingComponent,
  },
  {
    path: '/h-render',
    name: 'HRender',
    component: HRender,
  },
  {
    path: '/validate-with-yup',
    name: 'FormValidateYup',
    component: FormValidateYup,
  },
  {
    path: '/directive-custom',
    name: 'DirectiveCustom',
    component: DirectiveCustom,
  },
  {
    path: '/transition-component',
    name: 'Transition',
    component: Transition,
  },
  {
    path: '/transition-javascript-hook',
    name: 'TransitionJavascriptHook',
    // component: TransitionJavascriptHook,
    component: () =>
      import(
        /* webpackChunkName: "transitionJavascriptHook" */ '../views/TransitionJavascriptHook.vue'
      ),
  },
  {
    path: '/slider',
    name: 'SliderPage',
    component: () =>
      import(/* webpackChunkName: "SliderPage" */ '../views/SliderPage.vue'),
  },
  {
    path: '/custom-pagination',
    name: 'PaginationPage',
    component: () =>
      import(
        /* webpackChunkName: "PaginationPage" */ '../views/PaginationPage.vue'
      ),
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
