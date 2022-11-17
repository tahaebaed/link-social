import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { searchQuery as validationSchema } from '../../validation/navbar';
import { BiSearchAlt } from 'react-icons/bi';
import FormikControl from '../../components/FormFields/FormikControl';

function QuerySearch() {
	const [query] = useState('');

	const onSearchFormSubmit = (values) => {
		console.log(values);
	};

	return (
		<Formik
			initialValues={{ query }}
			validationSchema={validationSchema}
			onSubmit={onSearchFormSubmit}
		>
			{(formik) => {
				return (
					<Form className=''>
						<FormikControl
							name='query'
							id='query'
							type='text'
							icon={<BiSearchAlt />}
							label='Search ...'
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
					</Form>
				);
			}}
		</Formik>
	);
}

export default QuerySearch;
