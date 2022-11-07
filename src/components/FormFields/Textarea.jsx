import { ErrorMessage, Field } from 'formik';
import React from 'react';
import ErrorText from './ErrorText';

const Textarea = (props) => {
	const { label, name, ...rest } = props;
	return (
		<>
			<Field
				as='textarea'
				className='border-2 rounded-3xl pl-16 pt-2 w-full min-h-[4rem] create-post__textarea'
				id={name}
				name={name}
				placeholder={label}
				{...rest}
			/>
			<ErrorMessage name={name} component={ErrorText} />
		</>
	);
};

export default Textarea;
