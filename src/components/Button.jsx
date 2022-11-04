import React from 'react';
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
	return <button>{props.children}</button>;
}

export default Button;
