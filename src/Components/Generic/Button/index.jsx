import React from 'react';
import { Container } from './style';

const Button = ({ width, height, mt, mb, mr, ml, onClick, children }) => {
	return (
		<Container
			width={width}
			height={height}
			mt={mt}
			mb={mb}
			mr={mr}
			ml={ml}
			onClick={onClick}
		>
			{children}
		</Container>
	);
};

export default Button;