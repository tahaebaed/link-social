import React, { useState } from 'react';
import InputEmoji from 'react-input-emoji';
import Dropdown from '../Dropdown';
import Receiver from './Receiver';
import Sender from './Sender';
import { BiSend } from 'react-icons/bi';
import ProfileImg from '../ProfileImg';
import {
	BsFillCameraVideoFill,
	BsFillMicFill,
	BsTelephoneFill,
	BsArrowLeft,
} from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { unSelectContact } from '../../utilities/store/chat.slice';

function ChatView() {
	const dispatch = useDispatch();
	const [text, setText] = useState('');

	function handleOnEnter(text) {
		console.log('enter', text);
	}

	const onHideMessagesClick = () => {
		dispatch(unSelectContact());
	};

	return (
		<div>
			<div className='chat_header sticky top-[60px] z-10 bg-white flex justify-between px-10 py-3 shadow'>
				<div className='flex items-center'>
					<BsArrowLeft
						className='mr-4 cursor-pointer'
						onClick={onHideMessagesClick}
					/>
					<div className='user_img'>
						<ProfileImg
							online
							className='w-[50px] h-[50px] border border-gray-200'
						/>
					</div>
					<div className='user_name text-lg mx-3 font-medium text-gray-700'>
						<p className=''> Sadye Nolan</p>
						<p className='text-xs text-gray-400'>online</p>
					</div>
				</div>

				<div className='flex justify-center items-center'>
					<BsTelephoneFill className='text-aurora text-2xl mx-3' />
					<BsFillCameraVideoFill className='text-aurora text-2xl mx-3' />
					<div className='ml-4'>
						<Dropdown noArrow />
					</div>
				</div>
			</div>
			<div className='chat_body px-4 py-4 overflow-auto h-[66vh]'>
				<Receiver />
				<Sender />
				<Receiver />
				<Sender />
				<Receiver />
				<Sender />
				<Receiver />
				<Sender />
				<Receiver />
				<Sender />
				<Receiver />
				<Sender />
				<Receiver />
				<Sender />
				<Receiver />
				<Sender />
				<Receiver />
				<Sender />
			</div>
			<div className='chat_footer sticky bottom-0 bg-slate-100'>
				<div className='border grid grid-cols-12 items-center'>
					<div className='col-span-1 text-center'>
						<BsFillMicFill className='text-aurora text-2xl mx-auto' />
					</div>
					<div className='col-span-10'>
						<InputEmoji
							value={text}
							onChange={setText}
							cleanOnEnter
							onEnter={handleOnEnter}
							placeholder='Type a message'
						/>
					</div>
					<div className='col-span-1 text-center'>
						<button className='rounded-full text-xl w-[45px] h-[45px] bg-aurora text-white flex justify-center items-center'>
							<BiSend />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ChatView;
