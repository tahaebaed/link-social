import React from 'react';
import { Form, Formik } from 'formik';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineLock } from 'react-icons/ai';
import FormikControl from '../../components/FormFields/FormikControl.jsx';
import * as yup from 'yup';
import Button from '../../components/Button.jsx';
import Registration from '../../layout/Registration.jsx';
import { useDispatch } from 'react-redux';
import { login } from '../../utilities/store/user_reducer/extraReducers.js';
const SignIn = () => {
	const initialValues = {
		email: '',
		password: '',
	};
	const dispatch = useDispatch()
	const validationSchema = yup.object({
		email: yup
			.string()
			.email('Please enter a valid email')
			.required('Your email is required'),
		password: yup.string().required('Your password is required'),
	});

	return (
		<Registration>
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
							<h2 className='text-3xl mb-10 text-red-400'>Sign In</h2>
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
							<Button className='bg-orange-400 border-orange-400 hover:text-orange-400'>
								Submit
							</Button>
						</div>
					</Form>
				)}
			</Formik>
		</Registration>
	);
};

export default SignIn;
