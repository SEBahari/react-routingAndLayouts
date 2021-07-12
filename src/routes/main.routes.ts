import React from 'react'
const Home = React.lazy(() => import('../pages/Home.page'))
const routes = [
   { path: '/', exact: true, Component: Home, title: 'Home' }
]

export default routes;
