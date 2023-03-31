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
						<h2 className='text-3xl mb-10 text-red-400'>Sign In</h2>
						<div className='w-full'>
							<h2 className='mb-4 ml-2'>Email</h2>
							<FormikControl
								name='email'
								id='login_email'
								icon={<HiOutlineMail />}
								type='email'
								label='email'
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
								type='password'
								label='password'
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
	);
};

export default SignIn;
