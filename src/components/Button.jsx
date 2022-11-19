import React, { useState, useEffect } from 'react';

/**
 * @usage
- use `className` to add any additional className
- use `outline` to create outline buttons
- use `sm` to create small buttons
- use `lg` to create bigger buttons
- use `disabled` to disabled buttons actions

 * @example

<Button> Button </Button>
<Button lg> Button </Button>
<Button sm> Button </Button>
<Button disabled> Button </Button>

// Outline
<Button outline> Button </Button>
<Button outline lg> Button </Button>
<Button outline sm> Button </Button>
<Button outline disabled> Button </Button>

 * @param {Object} props 
 * @returns
 */
function Button({ sm, lg, outline, disabled, ...props }) {
	const [className, setClassName] = useState('');

	useEffect(() => {
		let initClass =
			`btn-aurora rounded-full border border-aurora select-none inline-block font-normal text-center align-middle py-1.5 px-3 text-base transition duration-500 ` +
			props.className;
		initClass += outline ? ' text-aurora bg-white ' : ' bg-aurora text-white ';
		initClass += sm ? ' py-1 px-2 text-sm' : '';
		initClass += lg ? ' py-2 px-4 text-xl' : '';

		if (disabled) {
			initClass += ' disabled:opacity-75 cursor-not-allowed ';
		} else {
			if (outline) {
				initClass += ' hover:bg-aurora hover:text-white';
			} else {
				initClass += ' hover:bg-white hover:text-aurora';
			}
		}

		setClassName(initClass);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<button {...props} className={className} disabled={disabled}>
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
