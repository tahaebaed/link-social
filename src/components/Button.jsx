import React, { useState, useEffect } from 'react';
import '../assets/sass/components/buttons.scss';

/**
 * @usage
- use `className` to add any additional className
- use `outline` to create outline buttons
- use `sm` to create small buttons
- use `lg` to create bigger buttons
- use `disabled` to disabled buttons actions

 * @example

<Button> Button </Button/>
<Button lg> Button </Button/>
<Button sm> Button </Button/>
<Button disabled> Button </Button/>

// Outline
<Button outline> Button </Button/>
<Button outline lg> Button </Button/>
<Button outline sm> Button </Button/>
<Button outline disabled> Button </Button/>

 * @param {Object} props 
 * @returns
 */
function Button(props) {
	const [className, setClassName] = useState('');

	useEffect(() => {
		let initClass = `btn-aurora ` + props.className;
		initClass += props.outline ? ' btn-outline' : '';
		initClass += props.sm ? ' sm' : '';
		initClass += props.lg ? ' lg' : '';
		initClass += props.disabled ? ' disabled' : '';

		setClassName(initClass);
	}, []);

	return (
		<button {...props} className={className} disabled={props.disabled}>
			{props.children}
		</button>
	);
}

Button.defaultProps = {
	children: 'Button',
	className: '',
	outline: false,
	sm: false,
	lg: false,
	disabled: false,
};

export default Button;
