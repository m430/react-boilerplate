import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = lazy(() => import('@/App'));
const PageA = lazy(() => import('@/pages/PageA'));
const PageB = lazy(() => import('@/pages/PageB'));

export default function RouterConfig() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/pagea" component={PageA} />
          <Route path="/pageb" component={PageB} />
        </Switch>
      </Suspense>
    </Router>
  )
}