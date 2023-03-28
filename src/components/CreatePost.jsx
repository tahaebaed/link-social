import React from 'react';
import { HiOutlineFaceSmile } from 'react-icons/hi2';

import iconAvatar from '../assets/attachment_15960883.svg';
import Button from './Button';
import '../assets/scss/components/CreatePost.scss';
import { Form, Formik } from 'formik';
import FormikControl from './FormFields/FormikControl';

/**
 * @usage
- use `avatar` to display the avatar of the user


 * @param {Object} { avatar } 
 * @returns
 */

const CreatePost = ({ avatar = iconAvatar }) => (
	<Formik initialValues={{ file: '', postContent: '' }}>
		{(formik) => (
			<Form className='w-[80%] mx-auto py-4 px-8 border-2 rounded-3xl'>
				<div className='relative'>
					<img
						src={avatar}
						className='absolute left-2 top-2 rounded-full border-2 w-12 py-4 px-2'
						alt='user avatar'
					/>
					<FormikControl
						type='textarea'
						name='postContent'
						label='what on your mind...'
						inputClasses='w-full h-[5rem] pl-[4rem] pt-4 create-post__textarea'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						values={formik.values}
					/>
				</div>
				<div className='flex justify-between mt-2 w-auto'>
					<div className='flex'>
						<FormikControl
							control='file'
							name='file'
							label='Photos/Videos'
							{...formik}
						/>
						<button className='px-4 py-2 flex items-center'>
							<HiOutlineFaceSmile
								aria-hidden='true'
								className='mr-1 text-2xl'
							/>
							<span className='small-hidden'>feeling</span>
						</button>
					</div>
					<Button className='px-6 py-2' sm>
						add post
					</Button>
				</div>
			</Form>
		)}
	</Formik>
);

export default CreatePost;
