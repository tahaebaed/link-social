import axios from 'axios';
import { Field } from 'formik';
import React from 'react';
import { HiOutlineCamera } from 'react-icons/hi2';

const FileInput = ({ control, name, label, ...rest }) => {
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
					console.log(
						`${Math.round((progressEvent.loaded / progressEvent.total) * 100)}%`
					);
				},
			})
			.then((res) => {
				rest.setFieldValue('file', res.data);
			});
	};
	return (
		<Field name={name}>
			{({
				field, // { name, value, onChange, onBlur }
			}) => (
				<label
					htmlFor={name}
					className='cursor-pointer mr-2 px-4 py-2 flex items-center'
				>
					<HiOutlineCamera className='mr-1 text-2xl' />
					<span className='small-hidden'>{label}</span>
					<input
						type={control}
						id={name}
						accept='video/*, image/*'
						name={name}
						hidden
						onChange={uploadFileHandler}
					/>
				</label>
			)}
		</Field>
	);
};

export default FileInput;
