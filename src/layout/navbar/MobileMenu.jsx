import React from 'react';
import { HiOutlineViewList } from 'react-icons/hi';
import { MdOutlineLogout } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { AVATAR_DROPDOWN_ITEMS } from '../../constants/navbar';
import Dropdown from '../../components/Dropdown';
import { useSelector } from 'react-redux';

function MobileMenu() {
	const user = useSelector((state) => state.auth.user);

	const onLogoutBtnClick = (evt) => {
		evt.preventDefault();
		console.log('logout');
	};

	return (
		<div className='flex justify-end'>
			<Dropdown
				noArrow
				className='humbugger-dropdown'
				label={<HiOutlineViewList className='text-xl text-aurora' />}
			>
				<li>
					<div className='dropdown-item'>
						<div className='flex items-center'>
							<img
								src={user?.profile?.avatar}
								className='rounded-full object-cover border border-emerald-400 p-1'
								width='36'
								height='36'
								alt={user?.first_name + ' ' + user?.last_name}
							/>
							<Link to={`/profile/${user.id}`} className='mx-2'>
								<span className='block text-sm text-gray-700 font-bold'>
									{user?.first_name + ' ' + user?.last_name}
								</span>
								<span className='text-xs block text-gray-500'>
									{user?.user_name}
								</span>
							</Link>
						</div>
					</div>
				</li>
				<li>
					<hr className='dropdown-divider' />
				</li>
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

export default MobileMenu;
