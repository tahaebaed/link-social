import React from 'react';
import { MdOutlineLogout } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { AVATAR_DROPDOWN_ITEMS } from '../../constants/navbar';
import Dropdown from '../../components/Dropdown';

function UserDropdown() {
	const DropdownLabel = () => {
		return (
			<div className='flex items-center'>
				<img
					src='https://res.cloudinary.com/mohammed-taysser/image/upload/h_500,w_500/v1654621448/paperCuts/authors/avatar/mu931hsdzu68wwqpumbh.jpg'
					className='rounded-full object-cover border border-emerald-400 p-1'
					width='36'
					height='36'
					alt='Mohammed Taysser'
				/>
				<div className='mx-2'>
					<span className='block text-sm text-gray-700 font-bold'>
						Mohammed Taysser
					</span>
					<span className='text-xs block text-gray-500'>username</span>
				</div>
			</div>
		);
	};

	const onLogoutBtnClick = (evt) => {
		evt.preventDefault();
		console.log('logout');
	};

	return (
		<div>
			<Dropdown noArrow label={<DropdownLabel />} className='avatar-dropdown'>
				{AVATAR_DROPDOWN_ITEMS.map((item, index) => (
					<li key={index}>
						<Link className='dropdown-item' to={item.url}>
							<item.icon className='inline-block text-xl' />
							<span className='mx-2'>{item.label}</span>
						</Link>
					</li>
				))}
				<li>
					<hr className='dropdown-divider' />
				</li>
				<li>
					<a
						className='dropdown-item danger-item'
						href='#logout'
						onClick={onLogoutBtnClick}
					>
						<MdOutlineLogout className='inline-block text-xl' />
						<span className='mx-2'>logout</span>
					</a>
				</li>
			</Dropdown>
		</div>
	);
}

export default UserDropdown;
