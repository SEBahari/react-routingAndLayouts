import { Main, Dashboard } from '../Layout'
const routes = [
   { path: '/dashboard', exact: false, Component: Dashboard, title: 'Dashboard' },
   { path: '/', exact: false, Component: Main, title: 'Main' }
]

export default routes;