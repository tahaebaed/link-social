import { ErrorMessage, Field } from 'formik';
import React from 'react';
import ErrorText from './ErrorText';

const Textarea = (props) => {
	const { label, name, ...rest } = props;
	return (
		<div className='rounded-full w-fit border py-2 px-4'>
			<Field
				as='textarea'
				id={name}
				name={name}
				{...rest}
				placeholder={label}
			/>
			<ErrorMessage name={name} component={ErrorText} />
		</div>
	);
};

export default Textarea;
