import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Route, Switch, NavLink, useRouteMatch } from 'react-router-dom'
import Header from '../components/Dashboard/Header';
import Sidebar from '../components/Dashboard/Sidebar';
import routes from '../routes/dashboard.routes'

export default function Dashboard() {
   const match = useRouteMatch();
   return (
      <>
         <Container fluid>
            <Row style={{ height: "100vh" }}>
               <Col lg={2} md={3} sm={4} xs={5} className={"p-0"} >
                  <Sidebar />
               </Col>
               <Col className={"px-0"}>
                  <Header />
                  <Container className={"pt-4"}>
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
               </Col>
            </Row>
         </Container>
      </>
   )
}
