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
function Block({ sm, lg, rounded, ...props }) {
	const [className, setClassName] = useState('');
	useEffect(() => {
		let initClass = `my-3 mx-2 ` + props.className;

		initClass += sm ? 'block_animation w-[80px]' : '';
		initClass += lg ? 'w-[120px]' : '';
		initClass += rounded ? 'w-[40px] h-[40px] img_hover' : '';

		setClassName(initClass);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return <p {...props} className={className}></p>;
}
Block.defaultProps = {
	className: '',
	sm: false,
	lg: false,
	rounded: false,
};
export default Block;
