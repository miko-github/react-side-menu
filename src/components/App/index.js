import React from 'react';

import Paths from './paths';
import RouterDOM from './route';
import Nav from '../Navigation';

export default () => {
	return (
		<React.Fragment>
			<Nav items={Paths} />
			<RouterDOM items={Paths} />
		</React.Fragment>
	);
};
