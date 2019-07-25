
const routes = [
  {
    path: '/',
    component: () => import('pages/Login.vue')
  },
  {
    path: '/home',
    component: () => import('layouts/MyLayout.vue'),
    children: [

      { path: 'index', component: () => import('pages/Index.vue') },
      { path: 'curso', component: () => import('pages/Cursos.vue') },
      { path: 'incripcion', component: () => import('pages/PreInscripcion.vue') }

    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
