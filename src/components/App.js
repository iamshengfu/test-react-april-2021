import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppMock from './pages/AppMock';
import ModifiedApp from './pages/ModifiedApp';
import Navbar from './Reusables/Navbar';

function Navigation() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route key='modifiedapp' path='/' exact component={ModifiedApp} />
        <Route key='appmock' path='/appmock' exact component={AppMock} />
      </Switch>
    </BrowserRouter>
  );
}

export default Navigation;
