import React from 'react';
import QuerySearch from '../../layout/navbar/QuerySearch';
import '../../assets/scss/layout/scrollbar.scss';
import FriendInbox from './FriendInbox';

function ChatsList() {
	return (
		<div className='fixed h-[100vh] w-[25%] border'>
			<div className='w-full'>
				<div className='shadow-sm'>
					<div className='title p-3 mt-1 mb-4 border-b'>
						<p className='text-2xl font-bold text-zinc-500'>Chats</p>
					</div>
					<div className='search_chats mt-5 '>
						<QuerySearch />
					</div>
				</div>

				<div className='chats_inbox h-[65vh] overflow-auto'>
					<FriendInbox />
				</div>
			</div>
		</div>
	);
}

export default ChatsList;
