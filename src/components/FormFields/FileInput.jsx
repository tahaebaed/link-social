/**
	* @usage
		- 	type : define the input file
		- 	name : define the name input to handle the values to store it
		- 	label : to display the place holder name for the upload instead of the default shape
		- 	className : defines the classes were passing to control the styles
		-  {...rest} : if there any other props passing to the input
		-  new formData() to setup my file data
	* @example
		<FormikControl type="file" name="fromFormikPropertyValue" />

	* @param {type, name, label, className, ...rest : others passing props} props 
	* @returns
 */

import { Field } from 'formik';
import React from 'react';
import { HiOutlineCamera } from 'react-icons/hi2';

const FileInput = ({ type, name, label, className, ...rest }) => {
	const uploadFileHandler = (e) => {
		const fd = new FormData();
		fd.append('file', e.target.files[0]);
		fd.append('image_name', e.target.files[0].name);
		fd.append('type', e.target.files[0].type);

		rest.setFieldValue(name, fd);
	};
	return (
		<Field name={name}>
			{({
				field, // { name, value, onChange, onBlur }
			}) => (
				<label
					htmlFor={name}
					className={`${className} cursor-pointer mr-2 px-4 py-2 flex items-center`}
				>
					<HiOutlineCamera className='mr-1 text-2xl' />
					<span className='small-hidden'>{label}</span>
					<input
						type={type}
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
