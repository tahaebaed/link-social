import React from 'react';
import '../assets/sass/components/buttons.scss';

function Button(props) {
	return <button>{props.children}</button>;
}

export default Button;
