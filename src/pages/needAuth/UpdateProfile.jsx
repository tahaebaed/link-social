import { Form, Formik } from 'formik';
import React from 'react';
import { BsPerson } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import Button from '../../components/Button';
import FormikControl from '../../components/FormFields/FormikControl';
import Preview from '../../components/Preview';
import usePageTitle from '../../hooks/usePageTitle';
import SettingWrapper from '../../layout/SettingWrapper';
import { updateProfileValidationSchema } from '../../validation/setting';

const SubmitBtnLabel = ({ formik }) => {
	if (formik.initialValues !== formik.values) {
		return <>Save</>;
	} else {
		if (formik.isValidating) {
			return <>Updating</>;
		} else {
			return <>Submit</>;
		}
	}
};

const UpdateProfile = () => {
	usePageTitle('Setting | Update Profile');
	const { profile } = useSelector((store) => store['auth']['user']);

	const onFormSubmit = (values) => {
		console.log(values);
	};

	return (
		<SettingWrapper>
			<div className='my-20'>
				<Formik
					initialValues={{
						bio: profile.description,
						cover: profile.cover,
						avatar: profile.avatar,
					}}
					validationSchema={updateProfileValidationSchema}
					onSubmit={onFormSubmit}
					enableReinitialize
				>
					{(formik) => {
						return (
							<Form>
								<div className='mb-5'>
									<h4 className='mb-4 first-letter:text-4xl first-letter:text-aurora text-xl font-bold'>
										Cover:
									</h4>
									<Preview
										label=''
										id='cover'
										img={formik.values.cover}
										width='full'
										height='60'
										onChange={formik.handleChange}
									/>
								</div>
								<div className='md:grid grid-cols-3'>
									<div className='col-span-1'>
										<h4 className='mb-4 first-letter:text-4xl first-letter:text-aurora text-xl font-bold'>
											Avatar:
										</h4>
										<Preview
											label=''
											id='avatar'
											img={formik.values.avatar}
											onChange={formik.handleChange}
										/>
									</div>
									<div className='col-span-2'>
										<h4 className='mb-5 first-letter:text-4xl first-letter:text-aurora text-xl font-bold'>
											Bio:
										</h4>
										<FormikControl
											icon={<BsPerson />}
											name='bio'
											id='user-bio'
											type='textarea'
											label='Bio'
											inputClasses='h-96'
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
										/>
									</div>
								</div>
								<div className='flex mt-4 justify-center'>
									<Button
										type='submit'
										// disabled={formik.initialValues === formik.values}
									>
										<SubmitBtnLabel formik={formik} />
									</Button>
									<Button
										outline
										className='mx-3'
										type='button'
										onClick={() => formik.resetForm()}
									>
										Cancel
									</Button>
								</div>
							</Form>
						);
					}}
				</Formik>
			</div>
		</SettingWrapper>
	);
};

export default UpdateProfile;
