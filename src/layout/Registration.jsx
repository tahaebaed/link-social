import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { MdAddLink } from 'react-icons/md';
import { IoLogInOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';

import '../assets/sass/components/registration.scss';

const Registration = () => {
	return (
		<section className='relative min-h-[90vh]'>
			<div className='registration-bg-wrap'></div>
			<div className='container mt-[4rem] flex items-center justify-center'>
				<div className='flex h-3/4 items-center flex-col md:flex-row justify-around w-full"'>
					<div className='mb-[3rem] md:mr-[5rem] flex flex-col content-around md:ml-[2rem]'>
						<h2 className='text-lg md:text-2xl text-stone-100 mb-7 '>
							Welcome to the your favorite Link platform
						</h2>
						<p className='text-md md:text-lg text-stone-100'>
							We are the best and biggest network with active users all around
							the world. Share you thoughts, write blog posts.
						</p>
					</div>
					<div className='bg-white flex flex-col '>
						<div className='registration-buttons w-[38rem] flex items-start flex-row'>
							<NavLink
								to='/registration/SignIn'
								className={({ isActive }) =>
									`h-[3rem] w-[19rem] flex items-center justify-center border text-2xl text-gray-400 transition-colors ${
										isActive ? 'text-stone-600' : ''
									}`
								}
							>
								<IoLogInOutline />
							</NavLink>
							<NavLink
								to='/registration/SignUp'
								className={({ isActive }) =>
									`h-[3rem] w-[19rem] flex items-center justify-center border text-2xl text-gray-400 transition-colors ${
										isActive ? 'text-stone-600' : ''
									}`
								}
							>
								<MdAddLink />
							</NavLink>
						</div>
						<div className='w-auto pb-20 p-8 md:w-[38rem]'>
							<motion.div
								whileInView={{ opacity: [0, 1] }}
								transition={{ type: 'tween', delay: 0.2 }}
							>
								<Outlet />
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Registration;
