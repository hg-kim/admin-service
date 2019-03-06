export default [

  {
    path: '*',
    meta: {
      public: true,
    },
    redirect: {
      path: '/404'
    }
  },  
  {
    path: '/404',
    meta: {
      public: true,
    },
    name: 'NotFound',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/NotFound.vue`
    )
  },
  {
    path: '/403',
    meta: {
      public: true,
    },
    name: 'AccessDenied',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/Deny.vue`
    )
  },
  {
    path: '/500',
    meta: {
      public: true,
    },
    name: 'ServerError',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/Error.vue`
    )
  },
  {
    path: '/login',
    meta: {
      public: true,
    },
    name: 'Login',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/Login.vue`
    )
  },
  {
    path: '/',
    meta: { },
    name: 'Root',
    redirect: {
      name: 'Login'
    }
  },
  {
    path: '/users',
    meta: { breadcrumb: true },
    name: 'Users',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/Users.vue`
    )
  },
  {
    path: '/users/create',
    meta: { breadcrumb: true },
    name: 'users-create',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/form/CreateUser.vue`
    )
  },
  {
    path: '/users/:userId',
    name: 'user',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/components/widgets/list/UserTable`
    )
  },
  {
    path: '/users/:userId/edit',
    name: 'user-edit',
    component: () => import(
      `@/views/form/EditUser.vue`
    )
  },
  {
    path: '/components/alert',
    meta: { breadcrumb: true },
    name: 'components/alerts',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/ui/Alert.vue`
    )
  },
  {
    path: '/components/button',
    meta: { breadcrumb: true },
    name: 'components/buttons',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/ui/Button.vue`
    )
  },
  {
    path: '/components/table',
    meta: { breadcrumb: true },
    name: 'components/tables',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/ui/Tables.vue`
    )
  },
  {
    path: '/components/dialog',
    meta: { breadcrumb: true },
    name: 'components/dialogs',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/ui/Dialogs.vue`
    )
  },
  {
    path: '/components/icon',
    meta: { breadcrumb: true },
    name: 'components/icons',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/ui/Icon.vue`
    )
  },
  {
    path: '/components/tooltip',
    meta: { breadcrumb: true },
    name: 'components/tooltips',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/ui/Tooltip.vue`
    )
  },
  {
    path: '/components/pagination',
    meta: { breadcrumb: true },
    name: 'components/paginations',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/ui/Pagination.vue`
    )
  },
  {
    path: '/forms/selects',
    meta: { breadcrumb: true },
    name: 'components/selects',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/form/Selects.vue`
    )
  },
  {
    path: '/forms/selection-controls',
    meta: { breadcrumb: true },
    name: 'components/selection-controls',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/form/SelectionControls.vue`
    )
  },
  
];
