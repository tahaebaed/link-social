/**
 * A reusable Radio Button component that uses Formik's Field and ErrorMessage components
 * to manage form state and error messages.
 *
 * @component
 *
 * @param {string} name - The name attribute of the radio button input field
 * @param {Array} options - An array of objects containing the key and value of the radio button options
 * @param {string} type - The type attribute of the radio button input field (defaults to 'radio')
 * @param {string} inputClasses - Additional classes to apply to the radio button input field
 * @param {string} labelClasses - Additional classes to apply to the radio button labels
 * @param {object} rest - The rest of the props you can add
 *
 * @returns {JSX.Element} - A JSX element representing the file input component.
 *
 * @example
 *
 * const options = [
 *    { key: 'Option 1', value: 'option1' },
 *    { key: 'Option 2', value: 'option2' },
 *    { key: 'Option 3', value: 'option3' },
 * ];
 *
 * <RadioButton
 *    name="radioButton"
 *    options={options}
 *    type="radio"
 *    inputClasses="form-control"
 *    labelClasses="form-check-label"
 * />
 */

import React from 'react';
import { ErrorMessage, Field } from 'formik';
import PropTypes from 'prop-types';

import ErrorText from './ErrorText';

const RadioButton = ({
	name,
	options,
	type,
	inputClasses,
	labelClasses,
	wrapperClasses,
	...rest
}) => (
	<>
		<Field name={name}>
			{({ field }) => (
				<div className={wrapperClasses}>
					{options.map((option) => {
						return (
							<div key={option.key}>
								<input
									className={inputClasses}
									type={type}
									id={option.value}
									{...field}
									value={option.value}
									checked={field.value === option.value}
								/>
								<label htmlFor={option.value} className={labelClasses}>
									{option.key}
								</label>
							</div>
						);
					})}
				</div>
			)}
		</Field>
		<ErrorMessage component={ErrorText} name={name} />
	</>
);

RadioButton.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.string,
	inputClasses: PropTypes.string,
	labelClasses: PropTypes.string,
};
export default RadioButton;
