import React from 'react';

function WithLeftSidebar(props) {
	return (
		<section className='relative md:grid grid-cols-4 min-h-screen items-start justify-center overflow-y-hidden border'>
			<nav className='z-10 h-screen col-span-1 bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] '></nav>
			<div className='p-5 col-span-3 '>{props.children}</div>
		</section>
	);
}

export default WithLeftSidebar;
