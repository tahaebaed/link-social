import { Form, Formik } from 'formik';
import { FaBeer } from 'react-icons/fa';
import React from 'react';
import FormikControl from '../components/FormFields/FormikControl.jsx';
import * as yup from 'yup';

const SignUp = () => {
	const initialValues = {
		user_name: '',
		email: '',
		// Must be a valid email address.

		password: '',
		first_name: '',
		last_name: '',
		phone: '', // optional
		age: '', // optional
		gender: '', //optional,
	};
	const onSubmit = (values) => {
		console.log(values);
	};
	const validationSchema = yup.object({
		user_name: yup.string().required(),
	});
	return (
		<section>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
				{(formik) => (
					<Form>
						<div className='w-full'>
							<h2>User Name</h2>
							<FormikControl
								icon={<FaBeer />}
								name='user_name'
								id='user_name'
								type='text'
								label='user name'
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							<h2>Email</h2>
							<FormikControl
								name='email'
								id='email'
								type='email'
								label='email'
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							<FormikControl
								name='password'
								id='password'
								type='password'
								label='password'
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							<div className='flex w-full'>
								<div>
									<FormikControl
										name='first_name'
										id='first_name'
										label='first name'
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
								</div>
								<div>
									<FormikControl
										name='last_name'
										id='last_name'
										label='last name'
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
								</div>
							</div>
							<FormikControl
								name='phone'
								id='phone'
								label='phone'
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							<label className='flex'>
								<div className='w-2/6'>
									<FormikControl
										name='age'
										id='age'
										label='age'
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
								</div>
								<div className='w-4/5 flex'>
									<FormikControl
										className='flex'
										control='radio'
										label='gender'
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
					</Form>
				)}
			</Formik>
		</section>
	);
};

export default SignUp;
