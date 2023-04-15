import React, { createRef, useRef, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

function OffCanvas(props) {
	const [canvasRef] = useState(createRef());

	return (
		<>
			<div
				className='overlay bg-black opacity-80 h-full w-full fixed top-0 z-[60]'
				ref={canvasRef}
			></div>

			<div
				className={`fixed top-0 z-[70] h-[100vh] bg-white w-1/2 overflow-auto ${
					props.openCanvas ? 'left-0' : 'left-[-100px]'
				}`}
			>
				{props.children}
			</div>
		</>
	);
}

export default OffCanvas;
