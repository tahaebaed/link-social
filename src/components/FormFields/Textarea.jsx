/**
 * @param {string} name - The name attribute of the radio button input field
 * @param {Array} options - An array of objects containing the key and value of the radio button options
 * @param {string} type - The type attribute of the radio button input field (defaults to 'radio')
 * @param {string} inputClasses - Additional classes to apply to the radio button input field
 * @param {object} rest - The rest of the props you can add
 *
 * @returns {JSX.Element} - A JSX element representing the file input component.
 */

import { ErrorMessage, Field } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';

import ErrorText from './ErrorText';

const Textarea = ({
	label,
	name,
	inputClasses = 'rounded-full w-fit border py-2 px-4',
	...rest
}) => (
	<>
		<Field
			as='textarea'
			className={inputClasses}
			id={name}
			name={name}
			placeholder={label}
			{...rest}
		/>
		<ErrorMessage name={name} component={ErrorText} />
	</>
);

Textarea.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.string,
	inputClasses: PropTypes.string,
	labelClasses: PropTypes.string,
};
export default Textarea;
