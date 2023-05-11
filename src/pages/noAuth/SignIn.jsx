import { Form, Formik } from 'formik';
import React from 'react';
import { AiOutlineLock } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import * as yup from 'yup';
import Button from '../../components/Button';
import FormikControl from '../../components/FormFields/FormikControl';
import { useDispatch } from 'react-redux';
import { login } from '../../utilities/store/user_reducer/extraReducers.js';

const SignIn = () => {
	const initialValues = {
		email: '',
		password: '',
	};
	const dispatch = useDispatch();
	const validationSchema = yup.object({
		email: yup
			.string()
			.email('Please enter a valid email')
			.required('Your email is required'),
		password: yup.string().required('Your password is required'),
	});

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={(values) => {
				dispatch(login(values));
			}}
		>
			{(formik) => (
				<Form>
					<div>
						<h2 className='text-3xl mb-10 text-aurora'>Sign In</h2>
						<div className='w-full'>
							<h2 className='mb-4 ml-2'>Email</h2>
							<FormikControl
								name='email'
								id='login_email'
								icon={<HiOutlineMail />}
								inputClasses='border outline-sky-100 pl-10 py-2 rounded-lg w-full'
								wrapperClasses='h-[65px]'
								type='email'
								label='Email'
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
						</div>
						<div className='w-full'>
							<h2 className='mb-4 ml-2'>Password</h2>
							<FormikControl
								name='password'
								id='login_password'
								icon={<AiOutlineLock />}
								inputClasses='border outline-sky-100 pl-10 py-2 rounded-lg w-full'
								wrapperClasses='h-[65px]'
								type='password'
								label='Password'
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
						</div>
						<Button type='submit'>Submit</Button>
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default SignIn;
