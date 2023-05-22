import React from 'react';
import { MdOutlineLogout } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Dropdown from '../../components/Dropdown';
import { AVATAR_DROPDOWN_ITEMS } from '../../constants/navbar';
import { logOutUser } from '../../utilities/store/user_reducer/userSlice';

const DropdownLabel = () => {
	const user = useSelector((state) => state.auth.user);

	return (
		<div className='flex items-center'>
			<img
				src={user?.profile?.avatar}
				className='rounded-full object-cover border border-emerald-400 p-1'
				width='36'
				height='36'
				alt={user?.first_name + ' ' + user?.last_name}
			/>
			<div className='mx-2'>
				<span className='block text-sm text-gray-700 font-bold'>
					{user?.first_name + ' ' + user?.last_name}
				</span>
				<span className='text-xs block text-gray-500'>{user?.user_name}</span>
			</div>
		</div>
	);
};

function UserDropdown() {
	const navigateTo = useNavigate();
	const dispatch = useDispatch();

	const onLogoutBtnClick = (evt) => {
		evt.preventDefault();
		dispatch(logOutUser());
		navigateTo('/auth/sign-in');
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
