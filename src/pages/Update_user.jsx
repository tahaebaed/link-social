import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import FormikControl from '../components/FormFields/FormikControl';
import * as yup from 'yup';

import { updateUser } from '../utilities/store/user_reducer/extraReducers';
import { useParams } from 'react-router-dom';
import { userInterceptor } from '../utilities/interceptors/axios_instance';

const Update_user = () => {
	const [value, setValue] = useState(null);

	const initialValues = {
		...value,
	};
	const validationSchema = yup.object({
		user_name: yup
			.string()
			.required('please your username is required')
			.matches(/^[-\w.$@*!]{1,30}$/, "username mustn't contains any spaces"),
		email: yup
			.string()
			.email('please enter a valid email')
			.required('please your email is required'),
		first_name: yup.string().required('please your first name is required'),
		last_name: yup.string().required('please your last name is required'),
		phone: yup.string(),
		age: yup.string(),
		gender: yup.string().nullable(true),
	});

	const dispatch = useDispatch();
	const onSubmit = (values) => {
		dispatch(updateUser(values));
	};

	const params = useParams();
	useEffect(() => {
		userInterceptor({
			method: 'get',
			url: `api/v1/users/${params.profileId}`,
		}).then((res) => setValue(res.data.data.user));
	}, []);

	return (
		<section>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
				enableReinitialize
			>
				{(formik) => {
					console.log(formik);
					return (
						<Form>
							<div className='w-full'>
								<h2>User Name</h2>
								<FormikControl
									icon={<BsPerson />}
									name='user_name'
									id='user_name'
									type='text'
									label='user name'
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
								/>
								<h2>Email</h2>
								<div className='flex w-full'>
									<div>
										<h2>First Name</h2>

										<FormikControl
											name='first_name'
											id='first_name'
											label='first name'
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
										/>
									</div>
									<div>
										<h2>Last Name</h2>

										<FormikControl
											name='last_name'
											id='last_name'
											label='last name'
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
										/>
									</div>
								</div>
								<h2>Phone</h2>

								<FormikControl
									name='phone'
									id='phone'
									label='phone (optional)'
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
								/>
								<label className='flex'>
									<div className='w-2/6'>
										<h2>age </h2>

										<FormikControl
											name='age'
											id='age'
											label='age (optional)'
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
										/>
									</div>
									<div className='w-4/5 flex'>
										<FormikControl
											className='flex'
											control='radio'
											label='gender (optional)'
											options={[
												{ value: 'male', key: 'male' },
												{ value: 'female', key: 'female' },
											]}
											name='gender'
											id='gender'
										/>
									</div>
								</label>
							</div>
							<button
								type='submit'
								disabled={formik.initialValues === formik.values}
							>
								{formik.initialValues !== formik.values
									? 'save'
									: formik.isValidating
									? 'updating'
									: 'submit'}
							</button>
							<button type='button' onClick={() => formik.resetForm()}>
								cancel
							</button>
						</Form>
					);
				}}
			</Formik>
		</section>
	);
};

export default Update_user;
