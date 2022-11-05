import React from 'react';
import './../assets/sass/components/loader.scss';

function Loader() {
	return (
		<div className='flex  justify-center items-center h-screen'>
			<div className='pulsing-8'></div>
		</div>
	);
}

export default Loader;
