import React, { useState } from 'react';
import ProfileImg from '../../components/ProfileImg';
import '../../assets/scss/layout/scrollbar.scss';
function FriendInbox() {
	const [isOpen, setOpen] = useState(null);
	const openChat = (index) => {
		setOpen(index);
	};
	return (
		<>
			{[
				1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
			].map((inbox, i) => (
				<div
					className={`inbox flex items-center py-3 px-4 cursor-pointer
					${isOpen === i ? ' active' : ''}
					`}
					key={i}
					onClick={() => openChat(i)}
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
