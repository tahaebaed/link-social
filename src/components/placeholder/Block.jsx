import React, { useEffect, useState } from 'react';

/**
 * @usage
- use `className` to add any additional className
- use `sm` to create small block
- use `lg` to create bigger block

 * @example
  <Block lg/>
  <Block sm/>
  <Block className="w-[40px]"/>

 */
function Block({ sm, lg, ...props }) {
	const [className, setClassName] = useState('');
	useEffect(() => {
		let initClass = `my-3 mx-2 ` + props.className;

		initClass += sm ? 'w-[80px]' : '';
		initClass += lg ? 'w-[120px]' : '';

		setClassName(initClass);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return <p {...props} className={className}></p>;
}
Block.defaultProps = {
	className: '',
	sm: false,
	lg: false,
};
export default Block;
