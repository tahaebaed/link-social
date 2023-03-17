/**
 * A reusable file input component that uploads the file to Cloudinary and sets its value to Formik's field value.
 * @param {Object} props - The props object containing the following properties:
 * @param {string} props.type - The type of the input, e.g. 'file'.
 * @param {string} props.name - The name of the input field.
 * @param {string} props.label - The label for the input field.
 * @param {string} props.inputClasses - The CSS classes for the input element.
 * @param {string} props.labelClasses - The CSS classes for the label element.
 * @param {Object} props.rest - Any additional props to be spread on the input element.
 * @returns {JSX.Element} - A JSX element representing the file input component.
 */

import axios from 'axios';
import { Field } from 'formik';
import React from 'react';
import PropTypes from 'prop-types';
import { HiOutlineCamera } from 'react-icons/hi2';

const FileInput = ({
  type,
  name,
  label,
  inputClasses,
  labelClasses,
  ...rest
}) => {
  const uploadFileHandler = (e) => {
    const fd = new FormData();
    fd.append('file', e.target.files[0]);
    fd.append('public_id', e.target.files[0].name);
    fd.append('upload_preset', 'jqmus7oo');
    fd.append('api_key', 'tahaebaed2@gmail.com');

    const url = 'https://api.cloudinary.com/v1_1/diih3lhke/image/upload';

    axios
      .post(url, fd, {
        onUploadProgress: (progressEvent) => {
          console.log(
            `${Math.round((progressEvent.loaded / progressEvent.total) * 100)}%`
          );
        },
      })
      .then((res) => {
        rest.setFieldValue('file', res.data);
      });
  };

  return (
    <Field name={name}>
      {({ field }) => (
        <label htmlFor={name} className={labelClasses}>
          <HiOutlineCamera className='mr-1 text-2xl' />
          <span className='small-hidden'>{label}</span>
          <input
            className={inputClasses}
            type={type}
            id={name}
            accept='video/*, image/*'
            name={name}
            hidden
            onChange={uploadFileHandler}
            {...rest}
          />
        </label>
      )}
    </Field>
  );
};
FileInput.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.string,
	inputClasses: PropTypes.string,
	labelClasses: PropTypes.string,
};
export default FileInput;
