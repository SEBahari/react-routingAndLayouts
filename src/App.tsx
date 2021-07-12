import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from './routes/web.routes'
import Loader from './components/Loader'

function App() {
  return (
    <Router>
      <React.Suspense fallback={<Loader />}>
        <Switch>
          {
            routes.map(({ path, exact, Component }, index) => (
              <Route
                key={index}
                path={path}
                exact={exact}
              >
                <Component />
              </Route>
            ))
          }
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;
