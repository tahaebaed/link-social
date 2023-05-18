import React from 'react';
import { useSelector } from 'react-redux';
import ChatView from '../../components/chat/ChatView';
import usePageTitle from '../../hooks/usePageTitle';

import selectContactImage from '../../assets/images/background/select-contact-first.svg';

function ChatBox() {
	usePageTitle('Chat');
	const contact = useSelector((store) => store['chat']['contact']);

	if (contact) {
		return <ChatView />;
	}

	return (
		<div className='flex items-center justify-center h-full'>
			<div className='mx-auto text-center'>
				<img
					src={selectContactImage}
					alt='selectContactImage'
					className='md:w-3/5 inline-block max-w-full'
				/>
				<p className='mb-0 mt-3 text-gray-400'>
					Select contact to view messages
				</p>
			</div>
		</div>
	);
}

export default ChatBox;
