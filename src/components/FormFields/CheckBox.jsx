import { ErrorMessage, Field } from 'formik';
import React from 'react';
import ErrorText from './ErrorText';
const CheckBox = (props) => {
	const { label, name, options, control } = props;

	return (
		<div className='w-fit py-2 px-4'>
			<label>{label}</label>
			<Field name={name}>
				{({ field }) =>
					options.map((option) => {
						return (
							<div key={option.key}>
								<input
									className='align-middle border'
									type={control}
									id={option.value}
									{...field}
									value={option.value}
									checked={field.value.includes(option.value)}
								/>
								<label htmlFor={option.value} className='mx-2 '>
									{option.key}
								</label>
							</div>
						);
					})
				}
			</Field>
			<ErrorMessage component={ErrorText} name={name} />
		</div>
	);
};

export default CheckBox;
