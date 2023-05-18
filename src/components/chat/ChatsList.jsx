import React from 'react';
import FriendInbox from './FriendInbox';
import { ScrollArea } from '@mantine/core';

import '../../assets/scss/layout/scrollbar.scss';

function ChatsList() {
	return (
		<div className='border'>
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

			<ScrollArea className='h-[calc(100vh_-_180px)]'>
				<FriendInbox />
			</ScrollArea>
		</div>
	);
}

export default ChatsList;
