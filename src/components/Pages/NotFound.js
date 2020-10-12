import React from 'react';
const style = {
	width: `50%`,
	height: `50%`,
	objectFit: `cover`,
};
export default () => {
	return (
		<>
			<h1>NotFound 404!!</h1>
			<img
				style={style}
				src='https://image.freepik.com/free-vector/error-with-glitch-effect-screen-error-404-page-found_143407-1.jpg'
				alt='page not found!'
				crossOrigin
			/>
		</>
	);
};
