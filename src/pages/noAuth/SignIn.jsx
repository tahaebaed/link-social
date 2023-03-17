import React from 'react';
import { Form, Formik } from 'formik';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineLock } from 'react-icons/ai';
import FormikControl from '../../components/FormFields/FormikControl.jsx';
import * as yup from 'yup';
import Button from '../../components/Button.jsx';
import Registration from '../../layout/Registration.jsx';
const SignIn = () => {
	const initialValues = {
		email: '',
		password: '',
	};
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
				onSubmit={() => {
					console.log('done');
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
									control='password'
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
		</Registration>
	);
};

export default SignIn;
