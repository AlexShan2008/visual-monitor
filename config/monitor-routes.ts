export const monitorRoutes = [
  {
    path: '/monitor',
    name: 'monitor',
    icon: 'MonitorOutlined',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/monitor/global',
        name: 'global',
        component: './monitor/global',
      },
      {
        path: '/monitor/server',
        name: 'server',
        component: './monitor/server',
      },
      {
        path: '/monitor/user',
        name: 'user',
        component: './monitor/user-behavior',
      },
    ],
  },
];
