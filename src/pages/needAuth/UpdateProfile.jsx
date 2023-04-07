import React, { useState } from 'react';
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
		bio: user?.profile?.description,
		cover: user?.profile?.cover,
		avatar: user?.profile?.avatar,
	});

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
						<h4 className='mb-4 first-letter:text-4xl first-letter:text-aurora text-xl font-bold'>
							Cover:
						</h4>
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
							<h4 className='mb-4 first-letter:text-4xl first-letter:text-aurora text-xl font-bold'>
								Avatar:
							</h4>
							<Preview
								label=''
								id='avatar'
								name='avatar'
								img={profileData.avatar}
								onChange={(file, evt) =>
									onInputChange('avatar', evt.target.files[0])
								}
							/>
						</div>
						<div className='col-span-2'>
							<h4 className='mb-5 first-letter:text-4xl first-letter:text-aurora text-xl font-bold'>
								Bio:
							</h4>
							<textarea
								name='bio'
								id='user-bio'
								value={profileData.bio}
								onChange={(evt) =>
									onInputChange(evt.target.name, evt.target.value)
								}
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
