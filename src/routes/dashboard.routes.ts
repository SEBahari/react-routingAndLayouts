import React from 'react'
const Tables = React.lazy(() => import('../pages/Dashboard.pages/Tables.page'))
const Charts = React.lazy(() => import('../pages/Dashboard.pages/Charts.page'))
const Dashboard = React.lazy(() => import('../pages/Dashboard.pages/Dashboard.page'))

const routes = [
   { path: '/', exact: true, Component: Dashboard, title: 'First Page' },
   { path: '/tables', exact: true, Component: Tables, title: 'Tables' },
   { path: '/charts', exact: true, Component: Charts, title: 'Charts' }
]

export default routes