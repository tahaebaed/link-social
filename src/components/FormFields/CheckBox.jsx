/**
 * A custom checkbox component built using Formik and React.
 *
 * @param {Object} props - The props object for the component.
 * @param {string} props.label - The label text for the checkbox.
 * @param {string} props.name - The name of the checkbox input field.
 * @param {Array} props.options - An array of objects containing the value and key for each option.
 * @param {string} props.type - The type of the checkbox input field.
 * @param {string} props.inputClasses - The CSS classes to apply to the checkbox input field.
 * @param {string} props.labelClasses - The CSS classes to apply to the checkbox label.
 * @param {Object} props.rest - Any additional props to be spread on the input element.
 * @returns {JSX.Element} The CheckBox component.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, Field } from 'formik';

import ErrorText from './ErrorText';

const CheckBox = ({
	label,
	name,
	options,
	type,
	inputClasses,
	labelClasses,
	...rest
}) => {
	return (
		<>
			<label>{label}</label>
			<Field name={name}>
				{({ field }) =>
					options.map((option) => {
						const isChecked = field.value.includes(option.value);
						return (
							<div key={option.key}>
								<input
									className={inputClasses}
									type={type}
									id={option.value}
									{...field}
									value={option.value}
									checked={isChecked}
								/>
								<label htmlFor={option.value} className={labelClasses}>
									{option.key}
								</label>
							</div>
						);
					})
				}
			</Field>
			<ErrorMessage component={ErrorText} name={name} />
		</>
	);
};

CheckBox.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	options: PropTypes.arrayOf(
		PropTypes.shape({
			key: PropTypes.string.isRequired,
			value: PropTypes.string.isRequired,
		})
	).isRequired,
	type: PropTypes.string,
	inputClasses: PropTypes.string,
	labelClasses: PropTypes.string,
};

export default CheckBox;
