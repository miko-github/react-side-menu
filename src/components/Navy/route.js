import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// ------------------------
import Home from './../Pages/Home';
import Settings from './../Pages/Settings';
import NotFound from './../Pages/NotFound';

export default (props) => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' component={Home} exact />
				<Route path='/Settings' component={Settings} />
				<Route component={NotFound} />
				{/* {props.items.map((item) =>
					item?.nulled === true ? (
						<Route key={item.name} component={require(item.comp)} />
					) : (
						<Route
							key={item.path}
							path={item.path}
							component={require(item.comp)}
							exact
						/>
					),
				)} */}
			</Switch>
		</BrowserRouter>
	);
};
