import React from 'react';
import CheckBox from './CheckBox';
import FileInput from './FileInput';
import Input from './Input';
import RadioButton from './RadioButton';
import Textarea from './Textarea';

function FormikControl(props) {
	switch (props.control) {
		case 'file':
			return <FileInput {...props} />;
		case 'password':
			return <Input {...props} />;
		case 'textarea':
			return <Textarea {...props} />;
		case 'checkbox':
			return <CheckBox {...props} />;
		case 'radio':
			return <RadioButton {...props} />;
		case 'number':
			return <Input {...props} />;
		default:
			return <Input {...props} />;
	}
}

export default FormikControl;
