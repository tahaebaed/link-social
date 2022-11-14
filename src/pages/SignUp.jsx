import React from 'react';
import { BsPerson } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { Form, Formik } from 'formik';
import * as yup from 'yup';

import FormikControl from '../components/FormFields/FormikControl.jsx';
import { fetchUser } from '../utilities/store/user_reducer/extraReducers.js';

const SignUp = () => {
	const initialValues = {
		user_name: '',
		email: '',
		// Must be a valid email address.

		password: '',
		password_confirmation: '',
		first_name: '',
		last_name: '',
		phone: '', // optional
		age: '', // optional
		gender: '', //optional,
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
		password: yup
			.string()
			.required('please your password is required')
			.min(8, 'Your password is too short.')
			.matches(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
				'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
			),
		password_confirmation: yup
			.string()
			.required('please reenter you password as it required field')
			.oneOf([yup.ref('password'), null], 'Passwords must match'),
		first_name: yup.string().required('please your first name is required'),
		last_name: yup.string().required('please your last name is required'),
		phone: yup.string(),
		age: yup.string(),
		gender: yup.string(),
	});

	const dispatch = useDispatch();
	const onSubmit = (values) => {
		dispatch(fetchUser(values));
	};
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			{(formik) => (
				<Form className='h-[30rem] w-full text-sm'>
					<div className='w-full'>
						<div className='flex'>
							<div className='w-3/6'>
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
							</div>
							<div className='w-3/6'>
								<h2>Email</h2>
								<FormikControl
									name='email'
									id='email'
									icon={<HiOutlineMail />}
									type='email'
									label='email'
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
								/>
							</div>
						</div>
						<div className='flex'>
							<div className='w-3/6'>
								<h2>Password</h2>
								<FormikControl
									name='password'
									id='password'
									control='password'
									label='password'
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
								/>
							</div>
							<div className='w-3/6'>
								<h2>Confirm Password</h2>
								<FormikControl
									name='password_confirmation'
									id='password_confirmation'
									control='password'
									label='confirm password'
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
								/>
							</div>
						</div>

						<div className='flex w-full'>
							<div className='w-3/6'>
								<h2>First Name</h2>
								<FormikControl
									name='first_name'
									id='first_name'
									label='first name'
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
								/>
							</div>
							<div className='w-3/6'>
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
					<button type='submit'>submit</button>
				</Form>
			)}
		</Formik>
	);
};

export default SignUp;
