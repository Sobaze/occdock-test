import Dashboard from '../../views/Dashboard'
import Icons from '../../views/Icons'
import Notifications from '../../views/Notifications.js'
import UserProfile from '../../views/UserProfile.js'
import AdminUserPanel from '../../views/AdminUserPanel/AdminUserPanel.js'
import AdminDevicePanel from '../../views/AdminDevicePanel/AdminDevicePanel'

var routes = [
  {
    path: '/',
    name: 'Dashboard',
    icon: 'tim-icons icon-chart-pie-36',
    component: Dashboard
  },
  {
    path: '/users',
    name: 'Users',
    icon: 'tim-icons icon-badge',
    component: AdminUserPanel
  },
  {
    path: '/devices',
    name: 'Devices',
    icon: 'tim-icons icon-volume-98',
    component: AdminDevicePanel
  },
  {
    path: '/icons',
    name: 'Icons',
    icon: 'tim-icons icon-chart-pie-36',
    component: Icons
  },
  {
    path: '/profile',
    name: 'Profile',
    icon: 'tim-icons icon-chart-pie-36',
    component: UserProfile
  },
  {
    path: '/notifications',
    name: 'Notifications',
    icon: 'tim-icons icon-atom',
    component: Notifications
  }
]

export default routes
