import React from 'react';
import ChatView from '../../components/chat/ChatView';
import ChatsList from '../../components/chat/ChatsList';
import usePageTitle from '../../hooks/usePageTitle';

function ChatBox() {
	usePageTitle('Chat');
	return (
		<div className='grid grid-cols-8'>
			<div className='chats_list col-span-2'>
				<ChatsList />
			</div>
			<div className='chat_view col-span-6'>
				<ChatView />
			</div>
		</div>
	);
}

export default ChatBox;
