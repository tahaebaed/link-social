import React from 'react';
import image from '../../assets/images/background/404-page.svg';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

function PageNotFound() {
	return (
		<div className=' col-span-4 lg:col-span-3 flex justify-center items-center'>
			<div className='text-center'>
				<img
					src={image}
					alt='404-page'
					className='max-w-full md:w-2/4 inline-block'
				/>
				<p className='my-4 text-gray-400'>
					Sorry, the page your are looking for is not found
				</p>
				<Button as={Link} to='/'>
					TAKE ME HOME
				</Button>
			</div>
		</div>
	);
}

export default PageNotFound;
