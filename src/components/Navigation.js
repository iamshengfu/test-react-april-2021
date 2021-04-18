import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppMock from './AppMock';
import ModifiedApp from './ModifiedApp';
import Navbar from './Navbar';

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
