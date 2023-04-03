import React from 'react';
import '../assets/scss/components/animation.scss';

function Loadingdots() {
	return (
		<div className='loading_card w-100 text-center flex justify-center shadow rounded-md p-4 my-4'>
			<div className='snippet mt-2' data-title='dot-typing'>
				<div className='stage'>
					<div className='dot-typing'></div>
				</div>
			</div>
		</div>
	);
}

export default Loadingdots;
