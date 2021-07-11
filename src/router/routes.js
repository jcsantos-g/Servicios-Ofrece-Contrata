
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/about', component: () => import('pages/about.vue') },
      { path: '/servicios', component: () => import('pages/servicios.vue') },
      { path: '/perfil', component: () => import('pages/perfil.vue') },
      { path: '/publicaciones', component: () => import('pages/publicaciones.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
