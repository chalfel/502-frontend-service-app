import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';

const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} exact></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;