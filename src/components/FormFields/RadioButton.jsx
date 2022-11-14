import React from 'react';
import { ErrorMessage, Field } from 'formik';
import ErrorText from './ErrorText';

const RadioButton = (props) => {
	const { name, options, control } = props;
	return (
		<div className='w-fit py-2 px-4'>
			<Field name={name}>
				{({ field }) =>
					options.map((option) => {
						return (
							<div key={option.key}>
								<input
									className='align-middle'
									type={control}
									id={option.value}
									{...field}
									value={option.value}
									checked={field.value === option.value}
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

export default RadioButton;
