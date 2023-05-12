import React from 'react';

import '../../assets/scss/layout/scrollbar.scss';
import FriendInbox from './FriendInbox';
import { BiSearchAlt } from 'react-icons/bi';

function ChatsList() {
	return (
		<div className='fixed h-[100vh] w-[25%] border'>
			<div className='w-full'>
				<div className='shadow-sm'>
					<div className='title p-3 mt-1 mb-4 border-b'>
						<p className='text-2xl font-bold text-zinc-500'>Chats</p>
					</div>
					<div className='search_chats mt-5 '>
						<input
							className='rounded-full border py-2 pl-9 w-full outline-sky-100'
							placeholder='Search'
						/>
					</div>
				</div>

				<div className='chats_inbox h-[68vh] overflow-auto'>
					<FriendInbox />
				</div>
			</div>
		</div>
	);
}

export default ChatsList;
