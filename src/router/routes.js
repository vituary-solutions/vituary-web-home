
const routes = [
  {
    path: '/',
    component: () => import('layouts/VituaryLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'jguertin', component: () => import('pages/JustinGuertin.vue') },
      { path: '*', component: () => import('pages/Error404.vue') } // leave as the last one
    ]
  }
]

// Always leave this as last one for a catch-all
routes.push({
  path: '*',
  component: () => import('pages/Error404.vue')
})

export default routes
