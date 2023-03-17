import React from 'react';
import { BsPerson } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineLock, AiOutlineUnlock } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { Form, Formik } from 'formik';


import FormikControl from '../components/FormFields/FormikControl.jsx';

import { fetchUser } from '../utilities/store/user_reducer/extraReducers.js';
import Button from '../components/Button.jsx';
import { signUpValidationSchema } from './schemas.js';

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

	const dispatch = useDispatch();
	const onSubmit = (values) => {
		dispatch(fetchUser(values));
	};
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={signUpValidationSchema}
			onSubmit={onSubmit}
		>
			{(formik) => (
				<div>
					<h2 className='text-3xl mb-10 text-red-400'>Sign Up</h2>
					<Form className='w-full text-sm'>
						<div className='w-full'>
							<div className='flex'>
								<div className='w-3/6'>
									<h2 className='mb-4 ml-2'>User Name</h2>
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
									<h2 className='mb-4 ml-2'>Email</h2>
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
									<h2 className='mb-4 ml-2'>Password</h2>
									<FormikControl
										name='password'
										id='password'
										icon={<AiOutlineLock />}
										control='password'
										type='password'
										label='password'
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
								</div>
								<div className='w-3/6'>
									<h2 className='mb-4 ml-2'>Confirm Password</h2>
									<FormikControl
										name='password_confirmation'
										id='password_confirmation'
										icon={<AiOutlineUnlock />}
										control='password'
										type='password'
										label='confirm password'
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
								</div>
							</div>

							<div className='flex w-full'>
								<div className='w-3/6'>
									<h2 className='mb-4 ml-2'>First Name</h2>
									<FormikControl
										name='first_name'
										id='first_name'
										icon={<BsPerson />}
										label='first name'
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
								</div>
								<div className='w-3/6'>
									<h2 className='mb-4 ml-2'>Last Name</h2>

									<FormikControl
										name='last_name'
										id='last_name'
										icon={<BsPerson />}
										label='last name'
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
								</div>
							</div>
							<h2 className='mb-4 ml-2'>Phone</h2>

							<FormikControl
								name='phone'
								id='phone'
								label='phone (optional)'
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							<label className='flex'>
								<div className='w-3/6'>
									<h2 className='mb-4 ml-2'>Age </h2>

									<FormikControl
										name='age'
										id='age'
										label='age (optional)'
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>

								</div>
								<div className='w-3/6 flex'>
									<h2 className='mb-4 ml-2'>Gender</h2>
									<FormikControl
										className='flex'
										type='radio'
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
						<Button className='bg-orange-400 border-orange-400 hover:text-orange-400'>
							Submit
						</Button>
					</Form>
				</div>
			)}
		</Formik>
	);
};

export default SignUp;
