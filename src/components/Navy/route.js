import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default (props) => {
	return (
		<BrowserRouter>
			<main>
				<Switch>
					{props.items.map((item) => (
						<Route
							key={item.path}
							path={item.path}
							component={item.comp}
							exact
						/>
					))}
				</Switch>
			</main>
		</BrowserRouter>
	);
};
