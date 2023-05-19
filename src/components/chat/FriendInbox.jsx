import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProfileImg from '../../components/ProfileImg';
import { users } from '../../constants/users';
import { selectContact } from '../../utilities/store/chat.slice';

import '../../assets/scss/layout/scrollbar.scss';

function FriendInbox() {
	const dispatch = useDispatch();
	const contact = useSelector((store) => store['chat']['contact']);

	const onContactClick = (contact) => {
		dispatch(selectContact(contact));
	};

	return (
		<>
			{users.map((user, i) => {
				const isRead = Math.random() * 10 > 5;
				return (
					<div
						className={`inbox flex items-center py-3 px-4 cursor-pointer
					${contact && contact.id === user.id ? ' active' : ''}
					`}
						key={i}
						onClick={() => onContactClick(user)}
					>
						<div className='user_img'>
							<ProfileImg
								online
								className='w-[60px] h-[60px] border border-gray-200'
							/>
						</div>
						<div className='mx-3'>
							<p
								className={`user_name ${
									isRead ? 'text-gray-500' : 'text-gray-800'
								}`}
							>
								Sadye Nolan
							</p>
							<p
								className={`last_msg text-xs  ${
									isRead ? 'text-gray-400' : 'text-gray-700'
								}`}
							>
								I'm fine, how are you
							</p>
						</div>
					</div>
				);
			})}
		</>
	);
}

export default FriendInbox;
