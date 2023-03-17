/**
 * A reusable input component for use with Formik forms
 * @param {Object} props - The props object containing the following properties:
 * @param {string} props.type - The type of the input, e.g. 'file'.
 * @param {string} props.name - The name of the input field.
 * @param {string} props.label - The label for the input field.
 * @param {string} props.inputClasses - The CSS classes for the input element.
 * @param {string} props.labelClasses - The CSS classes for the label element.
 * @param {Object} props.rest - Any additional props to be spread on the input element.
 * 
 * @returns {JSX.Element} - A JSX element representing the file input component.
 */

import { ErrorMessage, Field } from 'formik';
import React from 'react';
import PropTypes from 'prop-types';

import ErrorText from './ErrorText';

const Input = ({
	name,
	label,
	icon,
	type,
	inputClasses,
	labelClasses,
	...rest
}) => (
	<>
		<span className={labelClasses} style={{ top: '17%' }}>
			{icon}
		</span>
		<Field
			className={inputClasses}
			id={name}
			name={name}
			placeholder={label}
			type={type || 'text'}
		/>
		<ErrorMessage name={name} component={ErrorText} />
	</>
);

Input.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.string,
	inputClasses: PropTypes.string,
	labelClasses: PropTypes.string,
};
export default Input;
