export default [
  {
    path: '/',
    name: 'home',
    redirect: { name: 'students' },
    component: () =>
      import('@/app/components/pages/student/StudentListPage.vue'),
  },
  {
    path: '/students',
    component: () => import('@/app/components/templates/WrapperTemplate.vue'),
    children: [
      {
        path: '',
        name: 'students',
        meta: {
          pageTitle: 'Consulta de alunos',
        },
        component: () =>
          import('@/app/components/pages/student/StudentListPage.vue'),
      },
      {
        path: 'new',
        name: 'new-student',
        meta: {
          pageTitle: 'Cadastro de aluno',
        },
        component: () =>
          import('@/app/components/pages/student/StudentFormPage.vue'),
      },
      {
        path: 'edit/:id',
        name: 'edit-student',
        props: true,
        meta: {
          pageTitle: 'Editar cadastro',
        },
        component: () =>
          import('@/app/components/pages/student/StudentFormPage.vue'),
      },
    ],
  },
];
