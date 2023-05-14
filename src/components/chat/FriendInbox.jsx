import React, { useState } from 'react';
import ProfileImg from '../../components/ProfileImg';
import '../../assets/scss/layout/scrollbar.scss';
import { users } from '../../constants/users';
function FriendInbox() {
	const [isOpen, setOpen] = useState(null);
	const openChat = (index) => {
		setOpen(index);
	};
	return (
		<>
			{users.map((user, i) => (
				<div
					className={`inbox flex items-center py-3 px-4 cursor-pointer
					${isOpen === user.id ? ' active' : ''}
					`}
					key={i}
					onClick={() => openChat(user.id)}
				>
					<div className='user_img'>
						<ProfileImg
							online
							className='w-[60px] h-[60px] border border-gray-200'
						/>
					</div>
					<div className='mx-3'>
						<p className='user_name text-gray-600'>Sadye Nolan</p>
						<p className='last_msg text-xs text-gray-400'>
							I'm fine, how are you
						</p>
					</div>
				</div>
			))}
		</>
	);
}

export default FriendInbox;
