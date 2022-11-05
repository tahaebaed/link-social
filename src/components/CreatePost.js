import React from 'react';
import { HiOutlineCamera, HiOutlineFaceSmile } from 'react-icons/hi2';

import iconAvatar from '../assets/attachment_15960883.svg';
import Button from './Button';

const CreatePost = ({ avatar }) => (
	<div className='w-[40%] mx-auto py-4 px-8 border-2 rounded-3xl'>
		<div className='relative'>
			<img
				src={avatar || iconAvatar}
				className='absolute left-2 top-4 rounded-full border-2 w-12 py-4 px-2'
				alt='user avatar'
			/>
			<input
				type='text'
				className='border-2 rounded-3xl px-16 w-full h-20'
				placeholder='what on your mind...'
			/>
		</div>
		<div className='flex justify-between mt-2 w-auto'>
			<div className='flex'>
				<label className='cursor-pointer mr-2 px-4 py-2 flex items-center'>
					<HiOutlineCamera className='mr-1' /> Photo/Video
					<input type='file' accept='video/*, image/*' hidden />
				</label>
				<button className='px-4 py-2 flex items-center'>
					<HiOutlineFaceSmile className='mr-1' /> felling
				</button>
			</div>
			<Button className='px-4 py-2' sm>
				add post
			</Button>
		</div>
	</div>
);

export default CreatePost;
