import { Textarea } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import Preview from '../../components/Preview';
import usePageTitle from '../../hooks/usePageTitle';
import SettingWrapper from '../../layout/SettingWrapper';
import { putUpdateProfile } from '../../utilities/store/setting.slice';

const UpdateProfile = () => {
	usePageTitle('Setting | Update Profile');
	const dispatch = useDispatch();
	const user = useSelector((store) => store['setting']['user']);

	const [profileData, setProfileData] = useState({
		bio: '',
		cover: '',
		avatar: '',
	});

	useEffect(() => {
		setProfileData({
			bio: user?.profile?.description,
			cover: user?.profile?.cover,
			avatar: user?.profile?.avatar,
		});
	}, [user]);

	const onFormSubmit = (evt) => {
		evt.preventDefault();
		const fd = new FormData();
		fd.append('avatar', profileData['avatar']);
		fd.append('cover', profileData['cover']);
		fd.append('bio', profileData['bio']);

		dispatch(putUpdateProfile(fd));
	};

	const onInputChange = (name, value) => {
		setProfileData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	return (
		<SettingWrapper>
			<div className='my-20'>
				<form onSubmit={onFormSubmit}>
					<div className='mb-5'>
						<label
							className='mb-4 block first-letter:text-4xl first-letter:text-aurora text-xl font-bold'
							htmlFor='cover'
						>
							Cover:
						</label>
						<Preview
							label=''
							id='cover'
							img={profileData.cover}
							className='w-[100%] h-72'
							imageClassName='w-[100%] h-72'
							onChange={(file) => onInputChange('cover', file)}
							name='cover'
						/>
					</div>
					<div className='md:grid grid-cols-3'>
						<div className='col-span-1'>
							<label
								className='mb-4 block first-letter:text-4xl first-letter:text-aurora text-xl font-bold'
								htmlFor='avatar'
							>
								Avatar:
							</label>
							<Preview
								label=''
								id='avatar'
								name='avatar'
								img={profileData.avatar}
								onChange={(file) => onInputChange('avatar', file)}
							/>
						</div>
						<div className='col-span-2'>
							<label
								className='mb-5 block first-letter:text-4xl first-letter:text-aurora text-xl font-bold'
								htmlFor='bio'
							>
								Bio:
							</label>
							<Textarea
								id='bio'
								value={profileData.bio}
								placeholder='Your comment'
								autosize
								minRows={2}
								maxRows={4}
								onChange={(evt) => onInputChange('bio', evt.target.value)}
							/>
						</div>
					</div>
					<div className='flex mt-4 justify-center'>
						<Button type='submit'>Save Changes</Button>
					</div>
				</form>
			</div>
		</SettingWrapper>
	);
};

export default UpdateProfile;
