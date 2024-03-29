import React, { useState, useEffect } from 'react';

/**
 * @usage
- use `className` to add any additional className
- use `outline` to create outline buttons
- use `sm` to create small buttons
- use `lg` to create bigger buttons
- use `as` to change button tag
- use `disabled` to disabled buttons actions

 * @example

<Button> Button </Button>
<Button lg> Button </Button>
<Button sm> Button </Button>
<Button disabled> Button </Button>
<Button as='a' href='#taps'> taps </Button>

// Outline
<Button outline> Button </Button>
<Button outline lg> Button </Button>
<Button outline sm> Button </Button>
<Button outline disabled> Button </Button>

 * @param {Object} props 
 * @returns
 */
function Button(props) {
	const { sm, lg, outline, disabled, as: As, ...reset } = props;
	const cls = () => {
		let initClass =
			`btn-aurora rounded-full border border-aurora select-none inline-block font-normal text-center align-middle py-1.5 px-3 text-base transition duration-500 leading-tight ` +
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
		return initClass;
	};
	const [className, setClassName] = useState(cls);

	useEffect(() => {
		setClassName(cls);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props]);

	return (
		<As {...reset} className={className} disabled={disabled}>
			{props.children}
		</As>
	);
}

Button.defaultProps = {
	children: 'Button',
	className: '',
	outline: false,
	sm: false,
	lg: false,
	disabled: false,
	as: 'button',
};

export default Button;
