import React from 'react';
import './style.scss';

export default (props) => {
	return (
		<>
			<nav>
				<ul>
					{props.items.map((item) =>
						item?.nulled ? (
							<React.Fragment></React.Fragment>
						) : (
							<li>
								<a href={item.path} title={item.title}>
									<span className='mdi mdi-taxi'></span>
									{item.text}
								</a>
							</li>
						),
					)}
				</ul>
			</nav>
		</>
	);
};
