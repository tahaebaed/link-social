import React from 'react';
import { NavLink } from 'react-router-dom';

const ProfileNavbar = (props) => {
	return (
		<div>
			<header className='header  shadow-md flex items-center mb-5 rounded-b-2xl md:px-8 py-02 bg-white'>
				<ul className='nav font-semibold text-lg flex items-center  w-full md:justify-around'>
					<li className=''>
						<NavLink
							to='timeline'
							className={({ isActive }) =>
								isActive
									? ' px-2  border-b-2 py-4 border-amber-700 border-opacity-100 text-amber-500  cursor-pointer '
									: 'text-neutral-600'
							}
						>
							Timeline
						</NavLink>
					</li>
					<li className=''>
						<NavLink
							to='about'
							className={({ isActive }) =>
								isActive
									? ' px-2  border-b-2 py-4 border-amber-700 border-opacity-100 text-amber-500  cursor-pointer '
									: 'text-neutral-600'
							}
						>
							About
						</NavLink>
					</li>
					<li className='py-4 text-center  px-1 '>
						<h2 className='text-xl'>{props.username}</h2>
						<small className='text-neutral-500'>{props.useremail}</small>
					</li>
					<li className='py-4 px-2 text-neutral-600 border-b-2 border-amber-700 border-opacity-0 hover:border-opacity-100 hover:text-amber-500 duration-200 cursor-pointer'>
						<a>Followes</a>
					</li>

					<li className='py-4 px-2 text-neutral-600 border-b-2 border-amber-700 border-opacity-0 hover:border-opacity-100 hover:text-amber-500 duration-200 cursor-pointer active'>
						<a>Photos</a>
					</li>
				</ul>
			</header>
		</div>
	);
};

export default ProfileNavbar;
