import { Form, Formik } from 'formik';
import React from 'react';
import { BiBuilding, BiLockAlt } from 'react-icons/bi';
import { BsGenderAmbiguous, BsPhone } from 'react-icons/bs';
import { FaBirthdayCake } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import {
	MdFamilyRestroom,
	MdOutlineDriveFileRenameOutline,
	MdOutlineMailOutline,
} from 'react-icons/md';
import { TbBuildingSkyscraper } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import FormikControl from '../../components/FormFields/FormikControl';
import usePageTitle from '../../hooks/usePageTitle';
import SettingWrapper from '../../layout/SettingWrapper';
import { updateUserValidationSchema } from '../../validation/setting';
import { putUpdateUser } from '../../utilities/store/setting.slice';

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
	const dispatch = useDispatch();
	const user = useSelector((store) => store['setting']['user']);

	const onFormSubmit = (values) => {
		dispatch(putUpdateUser(values));
	};

	return (
		<SettingWrapper>
			<div className='my-20'>
				<Formik
					initialValues={{
						birthday: user?.birthday,
						country: user?.country,
						email: user?.email,
						first_name: user?.first_name,
						last_name: user?.last_name,
						gender: user?.gender,
						phone: user?.phone,
						region: user?.region,
						status: user?.status,
						user_name: user?.user_name,
						current_password: user?.current_password,
						new_password: user?.new_password,
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
										<label htmlFor='user_name' className='mb-3 inline-block'>
											Username
										</label>
										<FormikControl
											icon={<MdOutlineDriveFileRenameOutline />}
											name='user_name'
											id='user_name'
											type='text'
											label='user name'
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
										<label htmlFor='first_name' className='mb-3 inline-block'>
											First name
										</label>
										<FormikControl
											icon={<FiUser />}
											name='first_name'
											id='first_name'
											type='text'
											label='first_name'
											onChange={formik.handleChange}
										/>
									</div>
									<div className='col-span-1 mx-3 my-1'>
										<label htmlFor='last_name' className='mb-3 inline-block'>
											Last name
										</label>
										<FormikControl
											icon={<FiUser />}
											name='last_name'
											id='last_name'
											type='text'
											label='last_name'
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
									<div className='col-span-1 mx-3 my-1'>
										<label
											htmlFor='current_password'
											className='mb-3 inline-block'
										>
											Current password
										</label>
										<FormikControl
											icon={<BiLockAlt />}
											name='current_password'
											id='current_password'
											type='password'
											label='current password'
											onChange={formik.handleChange}
										/>
									</div>
									<div className='col-span-1 mx-3 my-1'>
										<label htmlFor='new_password' className='mb-3 inline-block'>
											New password
										</label>
										<FormikControl
											icon={<BiLockAlt />}
											name='new_password'
											id='new_password'
											type='password'
											label='new password'
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
