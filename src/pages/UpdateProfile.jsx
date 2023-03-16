import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import * as yup from 'yup';
import Banner from '../components/Banner';
import Button from '../components/Button';
import FormikControl from '../components/FormFields/FormikControl';
import Preview from '../components/Preview';
import usePageTitle from '../hooks/usePageTitle';

function checkImageSize(files) {
	let valid = true;
	if (files) {
		files.forEach((file) => {
			const size = file.size / 1024 / 1024;
			if (size > 10) {
				// 10 MB
				valid = false;
			}
		});
	}
	return valid;
}

function checkImageType(files) {
	let valid = true;
	if (files) {
		files.forEach((file) => {
			if (!['image/jpeg', 'image/png', 'image/jpg'].includes(file.type)) {
				valid = false;
			}
		});
	}
	return valid;
}

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
	usePageTitle('Update Profile');
	const [value, setValue] = useState({
		bio: '',
		cover: null,
	});

	const validationSchema = yup.object({
		bio: yup.string().required('please your Bio is required'),
		cover: yup
			.object()
			.shape({
				files: yup
					.array()
					.nullable()
					.required('VALIDATION_FIELD_REQUIRED')
					.test('is-correct-file', 'VALIDATION_FIELD_FILE_BIG', checkImageSize)
					.test(
						'is-big-file',
						'VALIDATION_FIELD_FILE_WRONG_TYPE',
						checkImageType
					),
			})
			.required('please your last name is required'),
	});

	const onFormSubmit = (values) => {
		console.log(values);
	};

	return (
		<>
			<Banner
				title='Your Account Dashboard'
				subtitle="Welcome to your account dashboard! Here you'll find everything you need to change your profile information, settings, read notifications and requests, view your latest messages, change your password and much more! Also you can create or manage your own favorite page, have fun!"
			/>

			<div className='container mx-auto'>
				<Preview onChange={(file) => console.log(file)} circle />
				<p className='text-gray-500 text-sm'>
					Set the product thumbnail image. Only *.png, *.jpg and *.jpeg image
					files are accepted
				</p>
				<Formik
					initialValues={value}
					validationSchema={validationSchema}
					onSubmit={onFormSubmit}
					enableReinitialize
				>
					{(formik) => {
						return (
							<Form>
								<div className=''>
									<h2>Bio</h2>
									<FormikControl
										icon={<BsPerson />}
										name='bio'
										id='user-bio'
										type='textarea'
										label='Bio'
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
									<h2>Cover</h2>
									{value.cover && <img src={value.cover?.url} alt='cover' />}
									<FormikControl
										icon={<BsPerson />}
										name='cover'
										id='user-cover'
										type='file'
										control='file'
										label='Cover'
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										setFieldValue={(_file, cover) =>
											setValue((v) => ({ ...v, cover }))
										}
									/>
								</div>
								<Button
									type='submit'
									disabled={formik.initialValues === formik.values}
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
							</Form>
						);
					}}
				</Formik>
			</div>
		</>
	);
};

export default UpdateProfile;
