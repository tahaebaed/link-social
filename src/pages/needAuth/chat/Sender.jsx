import React from 'react';
import ProfileImg from '../../../components/ProfileImg';

function Sender() {
	return (
		<div className='chat_sender flex items-center my-5 flex-row-reverse'>
			<div className='flex-col'>
				<div className='flex flex-row-reverse'>
					<div className='sender_img'>
						<ProfileImg border />
					</div>
					<div className='text-right m-2'>
						<p className='text-sm font-medium text-gray-700'>Mack Rath</p>
						<p className='sender_time text-xs text-gray-400'>01:35 PM</p>
					</div>
				</div>

				<div className='sender_msg mx-2'>
					<div className='message-wrap mr-[40px] bg-teal-100 px-3 py-2 rounded-lg'>
						I want those files for you. I want you to send 1 PDF and 1 image
						file.
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sender;
