import { ErrorMessage, Field } from 'formik';
import React from 'react';
import ErrorText from './ErrorText';

const Input = (props) => {
	const { name, label, icon, control } = props;
	return (
		<div className='relative mb-5' style={{ height: '60px' }}>
			<span
				className='icon absolute p-1 rounded-full w-fit left-2 opacity-40'
				style={{ top: '17%' }}
			>
				{icon}
			</span>
			<Field
				className='rounded-full border py-2 pl-9 w-full '
				id={name}
				name={name}
				placeholder={label}
				type={control || 'text'}
			/>
			<ErrorMessage name={name} component={ErrorText} />
		</div>
	);
};

export default Input;
