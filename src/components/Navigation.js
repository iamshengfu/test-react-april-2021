import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from "./App"
import AppMock from './AppMock';
import ModifiedApp from './ModifiedApp';
import Navbar from './Navbar';


function Navigation() {
	return (
		<BrowserRouter>
			<Navbar/>
			<Switch>
					<Route key="home" path="/" exact component={App}/>
					<Route key="modifiedapp" path="/modifiedapp" exact component={ModifiedApp}/>
					<Route key="appmock" path="/appmock" exact component={AppMock}/>
			</Switch>
		</BrowserRouter>
	)
}

export default Navigation
