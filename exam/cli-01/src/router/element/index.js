import config from '@/config';

// eslint-disable-next-line import/prefer-default-export
export const element = [
  {
    path: '/element',
    name: 'element',
    meta: {
      title: `${config.title}-element`,
    },
    component: () => import('../../views/element/Home.vue'),
    children: [
      {
        path: 'demo1',
        name: 'demo1',
        component: () => import('../../views/element/demo1'),
      },
      {
        path: 'demo2',
        name: 'demo2',
        component: () => import('../../views/element/demo2'),
      },
    ],
  },
];
