import React from 'react'

var routes = [
  {
    path: '/',
    name: 'Dashboard',
    icon: 'tim-icons icon-chart-pie-36',
    component: () => <p>Dashboard</p>
  },
  {
    path: '/profile',
    name: 'Profile',
    icon: 'tim-icons icon-chart-pie-36',
    component: () => <p>profil</p>
  },
  {
    path: '/notifications',
    name: 'Notifications',
    icon: 'tim-icons icon-atom',
    component: () => <p>Notifications</p>
  },
  {
    path: '/annotations',
    name: 'Annotations',
    icon: 'tim-icons icon-atom',
    component: () => <p>Annotations</p>
  }
]

export default routes
