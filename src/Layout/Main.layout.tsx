import React from 'react'
import { Container } from 'react-bootstrap'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import Header from '../components/Main/Header'
import Footer from '../components/Main/Footer'
import routes from '../routes/main.routes'

export default function Main() {
   const match = useRouteMatch();
   return (
      <div className={"position-relative"} style={{ minHeight: '100vh' }}>
         <Header />
         <main>
            <Container className={"pt-3"}>
               <Switch>
                  {
                     routes.map(({ path, exact, Component }, index) => (
                        <Route
                           key={index}
                           path={match.path + path}
                           exact={exact}
                           component={Component}
                        />
                     ))
                  }
               </Switch>
            </Container>
         </main>
         <Footer />
      </div>
   );
}
