import React from 'react';
import ChatView from '../../components/chat/ChatView';
import usePageTitle from '../../hooks/usePageTitle';

function ChatBox() {
	usePageTitle('Chat');
	return (
		<div className='col-span-4 lg:col-span-3'>
			<ChatView />
		</div>
	);
}

export default ChatBox;
