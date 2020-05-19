import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Admin from './pages/Login/Admin';
import Doctor from './pages/Login/Doctor';
import Register from './pages/Register';

export default function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/admin" component={Admin} />
        <Route path="/doctor" component={Doctor} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  )
}