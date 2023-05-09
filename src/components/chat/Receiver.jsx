import React from 'react';
import ProfileImg from '../ProfileImg';
import '../../assets/scss/layout/scrollbar.scss';
function Receiver() {
	return (
		<div className='chat_receiver flex items-center my-5'>
			<div className='flex-col'>
				<div className='flex items-center'>
					<div className='receiver_img'>
						<ProfileImg border />
					</div>
					<div className='m-2'>
						<p className='text-sm font-medium text-gray-700'>Mack Rath</p>
						<p className='receive_time text-xs text-gray-400'>01:35 PM</p>
					</div>
				</div>

				<div className='receiver_msg mx-2'>
					<div className='message-wrap ml-[40px] bg-neutral-200 px-3 py-2 rounded-lg'>
						I'm fine, how are you.
					</div>
				</div>
			</div>
		</div>
	);
}

export default Receiver;
