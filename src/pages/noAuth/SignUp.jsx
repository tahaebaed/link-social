import { Form, Formik } from 'formik';
import React from 'react';
import { AiOutlineLock, AiOutlineUnlock } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import FormikControl from '../../components/FormFields/FormikControl';
import Button from '../../components/Button';
import { fetchUser } from '../../utilities/store/user_reducer/extraReducers';

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
			.required('Your username is required')
			.matches(/^[-\w.$@*!]{1,30}$/, "username mustn't contains any spaces"),
		email: yup
			.string()
			.email('please enter a valid email')
			.required('Your email is required'),
		password: yup
			.string()
			.required('Your password is required')
			.min(8, 'Your password is too short.')
			.matches(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
				'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
			),
		password_confirmation: yup
			.string()
			.required('Password confirmation is required')
			.oneOf([yup.ref('password'), null], 'Passwords must match'),
		first_name: yup.string().required('Your first name is required'),
		last_name: yup.string().required('Your last name is required'),
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
				<div>
					<h2 className='text-3xl mb-10 text-aurora'>Sign Up</h2>
					<Form className='w-full text-sm'>
						<div className='w-full'>
							<div className='flex'>
								<div className='w-3/6'>
									<h2 className='mb-4 ml-2'>User Name</h2>
									<div className='relative'>
										<FormikControl
											icon={<BsPerson />}
											name='user_name'
											inputClasses='border outline-sky-100 pl-7 py-2 rounded-lg w-full'
											wrapperClasses='h-[65px] px-3'
											id='user_name'
											type='text'
											label='user name'
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
										/>
									</div>
								</div>
								<div className='w-3/6'>
									<h2 className='mb-4 ml-2'>Email</h2>
									<FormikControl
										name='email'
										id='email'
										icon={<HiOutlineMail />}
										inputClasses='border outline-sky-100 pl-7 py-2 rounded-lg w-full'
										wrapperClasses='h-[65px] px-3'
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
										inputClasses='border outline-sky-100 pl-7 py-2 rounded-lg w-full'
										wrapperClasses='h-[65px] px-3'
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
										inputClasses='border outline-sky-100 pl-7 py-2 rounded-lg w-full'
										wrapperClasses='h-[65px] px-3'
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
										inputClasses='border outline-sky-100 pl-9 py-2 rounded-lg w-full'
										wrapperClasses='h-[65px]'
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
								inputClasses='border outline-sky-100 pl-9 py-2 rounded-lg w-full'
								wrapperClasses='h-[65px]'
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
										inputClasses='border outline-sky-100 pl-9 py-2 rounded-lg w-full'
										wrapperClasses='h-[65px]'
										label='age (optional)'
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
								</div>
								<div className='w-3/6 flex flex-co'>
									<h2 className='mb-4 ml-2'>Gender</h2>
									<div className='relative'>
										<FormikControl
											wrapperClasses='flex flex-col ml-6'
											inputClasses='mb-2 mr-2'
											className='flex'
											type='radio'
											label='gender (optional)'
											options={[
												{ value: 'male', key: 'male' },
												{ value: 'female', key: 'female' },
											]}
											name='gender'
											id='gender'
										/>
									</div>
								</div>
							</label>
						</div>
						<Button type='submit'>Submit</Button>
					</Form>
				</div>
			)}
		</Formik>
	);
};

export default SignUp;
