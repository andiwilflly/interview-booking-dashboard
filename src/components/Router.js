import React from "react";
import history from 'utils/history.utils';
import { Router, Route, Switch } from "react-router-dom";
// Pages
import HomePage from "components/pages/lazy/HomePage.lazy.component";
import InputPage from "components/pages/lazy/InputPage.lazy.component";
import BookingPage from "components/pages/lazy/BookingPage.lazy.component";
import Page404 from "components/pages/Page404.component";


const Routes = ()=> {
	return (
		<Router history={history}>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/input" component={InputPage} />
				<Route exact path="/booking" component={BookingPage} />
				<Route component={Page404} />
			</Switch>
		</Router>
	);
};

export default Routes;
