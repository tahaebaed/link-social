import React, { useCallback, useState } from 'react';
import { HiOutlineCamera, HiOutlineFaceSmile } from 'react-icons/hi2';

import iconAvatar from '../assets/attachment_15960883.svg';
import Button from './Button';
import '../assets/scss/components/CreatePost.scss';
import axios from 'axios';

/**
 * @usage
- use `avatar` to display the avatar of the user


 * @param {Object} props 
 * @returns
 */

const CreatePost = ({ avatar = iconAvatar }) => {
	const [file, setFile] = useState(null);
	const [upload, setUpload] = useState('0%');
	const uploadFileHandler = (e) => {
		const fd = new FormData();

		fd.append('file', e.target.files[0]);
		fd.append('public_id', e.target.files[0].name);
		fd.append('upload_preset', 'jqmus7oo');
		fd.append('api_key', 'tahaebaed2@gmail.com');
		const url = 'https://api.cloudinary.com/v1_1/diih3lhke/image/upload';

		axios
			.post(url, fd, {
				onUploadProgress: (progressEvent) => {
					setUpload(
						`${Math.round((progressEvent.loaded / progressEvent.total) * 100)}%`
					);
				},
			})
			.then((res) => {
				setFile(res.data);
			});
	};

	return (
		<>
			{/* {`upload: ${upload}`} */}
			<div className='w-[80%] mx-auto py-4 px-8 border-2 rounded-3xl'>
				<div className='relative'>
					<img
						src={avatar}
						className='absolute left-2 top-2 rounded-full border-2 w-12 py-4 px-2'
						alt='user avatar'
					/>
					<textarea
						type='textarea'
						name='post-content'
						className='border-2 rounded-3xl pl-16 pt-2 w-full h-20 create-post__textarea'
						placeholder='what on your mind...'
					/>
				</div>
				<div className='flex justify-between mt-2 w-auto'>
					<div className='flex'>
						<label className='cursor-pointer mr-2 px-4 py-2 flex items-center'>
							<HiOutlineCamera className='mr-1' />
							<span className='small-hidden'>Photo/Video</span>
							<input
								type='file'
								accept='video/*, image/*'
								name='file-uploader'
								hidden
								onChange={uploadFileHandler}
							/>
						</label>
						<button className='px-4 py-2 flex items-center'>
							<HiOutlineFaceSmile className='mr-1' />
							<span className=' small-hidden'>feeling</span>
						</button>
					</div>
					<Button className='px-4 py-2' sm>
						add post
					</Button>
				</div>
			</div>
			{/* <div className='w-[60%] h-15 m-auto'>
				<img src={file?.url} alt="post header img" />
			</div> */}
		</>
	);
};

export default CreatePost;
