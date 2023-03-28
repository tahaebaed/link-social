import React from 'react';
import { NavLink } from 'react-router-dom';
import Banner from '../components/Banner';
import WithLeftSidebar from './WithLeftSidebar';
import { VscFeedback } from 'react-icons/vsc';
import { BsPersonBoundingBox } from 'react-icons/bs';

function SettingWrapper(props) {
	const navLinkClassName = ({ isActive }) =>
		`p-2 transition duration-500 border-2 hover:text-aurora hover:border-aurora ${
			isActive ? 'border-aurora text-aurora ' : 'text-gray-400'
		} `;

	return (
		<WithLeftSidebar>
			<Banner
				title='Your Account Dashboard'
				subtitle="Welcome to your account dashboard! Here you'll find everything you need to change your profile information, settings, read notifications and requests, view your latest messages, change your password and much more! Also you can create or manage your own favorite page, have fun!"
			/>

			<div className='my-16'>
				<div className='flex justify-center'>
					<NavLink to='/setting/update-user' className={navLinkClassName}>
						<BsPersonBoundingBox className='text-4xl mx-auto mb-2' />
						Personal Information
					</NavLink>
					<NavLink to='/setting/update-profile' className={navLinkClassName}>
						<VscFeedback className='text-4xl mx-auto mb-2' /> Profile Setting
					</NavLink>
				</div>
			</div>
			<div className='md:mx-20'>{props.children}</div>
		</WithLeftSidebar>
	);
}

export default SettingWrapper;
