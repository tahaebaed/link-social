import React from 'react';
import { HiOutlineFaceSmile } from 'react-icons/hi2';

import iconAvatar from '../assets/images/icons/favicon.svg';
import Button from './Button';
import '../assets/scss/components/CreatePost.scss';
import { FieldArray, Form, Formik } from 'formik';
import FormikControl from './FormFields/FormikControl';
import ProfileImg from './ProfileImg';
import { useDispatch, useSelector } from 'react-redux';
import { createPosts } from '../utilities/store/posts_reducer/postReactsExtraReducer';
import Preview from './Preview';

/**
 * @usage
- use `avatar` to display the avatar of the user


 * @param {Object} { avatar } 
 * @returns
 */

const CreatePost = ({ avatar = iconAvatar }) => {
	const dispatch = useDispatch();
	const user = useSelector((store) => store['auth']['user']);
	const submitForm = (valuse, { resetForm }) => {
		console.log(valuse);
		dispatch(createPosts({ body: valuse.postContent, photos: valuse.postImg }));
		resetForm();
	};
	return (
		<Formik
			initialValues={{ postImg: [], postContent: '' }}
			onSubmit={submitForm}
		>
			{(formik) => (
				<Form
					id='create-post-form'
					className='mx-auto py-4 px-8 shadow rounded-md my-5'
				>
					<div className='relative'>
						<ProfileImg
							img={user?.profile?.avatar}
							className='absolute left-2 top-2 rounded-full border-2 w-[40px] h-[40px] p-0'
						/>
						<FormikControl
							type='textarea'
							name='postContent'
							label="what's on your mind?"
							inputClasses='w-full h-[5rem] pl-[4rem] pt-4 border border-1 rounded-lg min-h-[6rem] outline-sky-100 create-post__textarea '
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							values={formik.values}
						/>
					</div>
					<div>
						{formik.values.postImg.map((img) => (
							<Preview
								img={img}
								key={img}
								noLabel
								className='h-20 w-20'
								imageClassName='h-20 w-20'
							/>
						))}
					</div>
					<div className='flex justify-between mt-2 w-auto'>
						<div className='flex items-center'>
							<FieldArray
								name='postImg'
								render={(arrayHelpers) => (
									<>
										<FormikControl
											type='file'
											name='postImg'
											label='Photos/Videos'
											labelClasses='flex items-center'
											setFieldValue={formik.setFieldValue}
											onBlur={formik.handleBlur}
											values={formik.values}
											arrayHelpers={arrayHelpers}
										/>
									</>
								)}
							></FieldArray>

							<button className='px-4 py-2 flex items-center'>
								<HiOutlineFaceSmile
									aria-hidden='true'
									className='mr-1 text-2xl text-orange-500'
								/>
								<span className='small-hidden'>feeling</span>
							</button>
						</div>
						<Button
							disabled={
								formik.values.postContent || formik.values.file ? false : true
							}
							type='submit'
							className={`p-4 ${
								formik.values.postContent ? 'cursor-pointer' : ''
							}`}
						>
							Add Post
						</Button>
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default CreatePost;
