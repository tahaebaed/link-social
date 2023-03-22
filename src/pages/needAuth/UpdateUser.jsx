import { Form, Formik } from 'formik';
import React from 'react';
import { BiBuilding } from 'react-icons/bi';
import { BsGenderAmbiguous, BsPhone } from 'react-icons/bs';
import { FaBirthdayCake } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import {
	MdFamilyRestroom,
	MdOutlineDriveFileRenameOutline,
	MdOutlineMailOutline,
} from 'react-icons/md';
import { TbBuildingSkyscraper } from 'react-icons/tb';
import { useSelector } from 'react-redux';
import Button from '../../components/Button';
import FormikControl from '../../components/FormFields/FormikControl';
import usePageTitle from '../../hooks/usePageTitle';
import SettingWrapper from '../../layout/SettingWrapper';
import { updateUserValidationSchema } from '../../validation/setting';

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

const UpdateUser = () => {
	usePageTitle('Setting | Update User');
	const user = useSelector((store) => store['auth']['user']);

	const onFormSubmit = (values) => {
		console.log(values);
	};

	return (
		<SettingWrapper>
			<div className='my-20'>
				<Formik
					initialValues={{
						birthday: user.birthday,
						country: user.country,
						email: user.email,
						firstName: user.first_name,
						gender: user.gender,
						lastName: user.last_name,
						phone: user.phone,
						region: user.region,
						status: user.status,
						username: user.user_name,
					}}
					validationSchema={updateUserValidationSchema}
					onSubmit={onFormSubmit}
					enableReinitialize
				>
					{(formik) => {
						return (
							<Form>
								<div className='md:grid grid-cols-2 '>
									<div className='col-span-1 mx-3 my-1'>
										<label htmlFor='username' className='mb-3 inline-block'>
											Username
										</label>
										<FormikControl
											icon={<MdOutlineDriveFileRenameOutline />}
											name='username'
											id='username'
											type='text'
											label='username'
											onChange={formik.handleChange}
										/>
									</div>
									<div className='col-span-1 mx-3 my-1'>
										<label htmlFor='email' className='mb-3 inline-block'>
											Email
										</label>
										<FormikControl
											icon={<MdOutlineMailOutline />}
											name='email'
											id='email'
											type='email'
											label='email'
											onChange={formik.handleChange}
										/>
									</div>
									<div className='col-span-1 mx-3 my-1'>
										<label htmlFor='firstName' className='mb-3 inline-block'>
											First name
										</label>
										<FormikControl
											icon={<FiUser />}
											name='firstName'
											id='firstName'
											type='text'
											label='firstName'
											onChange={formik.handleChange}
										/>
									</div>
									<div className='col-span-1 mx-3 my-1'>
										<label htmlFor='lastName' className='mb-3 inline-block'>
											Last name
										</label>
										<FormikControl
											icon={<FiUser />}
											name='lastName'
											id='lastName'
											type='text'
											label='lastName'
											onChange={formik.handleChange}
										/>
									</div>

									<div className='col-span-1 mx-3 my-1'>
										<label htmlFor='phone' className='mb-3 inline-block'>
											Phone
											<span className='text-sm text-gray-500'>(optional)</span>
										</label>
										<FormikControl
											icon={<BsPhone />}
											name='phone'
											id='phone'
											type='tel'
											label='phone (optional)'
											onChange={formik.handleChange}
										/>
									</div>
									<div className='col-span-1 mx-3 my-1'>
										<label htmlFor='birthday' className='mb-3 inline-block'>
											Birthday
										</label>
										<FormikControl
											icon={<FaBirthdayCake />}
											name='birthday'
											id='birthday'
											type='date'
											label='birthday'
											onChange={formik.handleChange}
										/>
									</div>
									<div className='col-span-1 mx-3 my-1'>
										<label htmlFor='country' className='mb-3 inline-block'>
											Country
										</label>
										<FormikControl
											icon={<TbBuildingSkyscraper />}
											name='country'
											id='country'
											type='text'
											label='country'
											onChange={formik.handleChange}
										/>
									</div>
									<div className='col-span-1 mx-3 my-1'>
										<label htmlFor='region' className='mb-3 inline-block'>
											Region
										</label>
										<FormikControl
											icon={<BiBuilding />}
											name='region'
											id='region'
											type='text'
											label='region'
											onChange={formik.handleChange}
										/>
									</div>
									<div className='col-span-1 mx-3 my-1'>
										<label htmlFor='status' className='mb-3 inline-block'>
											Status
										</label>
										<FormikControl
											icon={<MdFamilyRestroom />}
											name='status'
											id='status'
											type='select'
											label='status'
											onChange={formik.handleChange}
										/>
									</div>
									<div className='col-span-1 mx-3 my-1'>
										<label htmlFor='gender' className='mb-3 inline-block'>
											Gender
										</label>
										<FormikControl
											icon={<BsGenderAmbiguous />}
											name='gender'
											id='gender'
											type='select'
											label='gender'
											onChange={formik.handleChange}
										/>
									</div>
								</div>
								<div className='flex justify-center mt-10'>
									<Button
										type='submit'
										// disabled={formik.initialValues === formik.values}
									>
										<SubmitBtnLabel formik={formik} />
									</Button>
									<Button
										type='button'
										outline
										className='mx-2'
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

export default UpdateUser;
