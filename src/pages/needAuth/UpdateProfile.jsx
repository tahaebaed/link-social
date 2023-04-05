import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../../components/Button';
import Preview from '../../components/Preview';
import usePageTitle from '../../hooks/usePageTitle';
import SettingWrapper from '../../layout/SettingWrapper';

const UpdateProfile = () => {
	usePageTitle('Setting | Update Profile');
	const { profile } = useSelector((store) => store['auth']['user']);
	const initState = {
		bio: profile.description,
		cover: profile.cover,
		avatar: profile.avatar,
	};
	const [profileData, setProfileData] = useState(initState);

	const isChange = JSON.stringify(initState) !== JSON.stringify(profileData);

	const onFormSubmit = (evt) => {
		evt.preventDefault();
		console.log(profileData);
	};

	const onInputChange = (evt) => {
		setProfileData((prev) => ({
			...prev,
			[evt.target.name]: evt.target.value,
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
							onChange={onInputChange}
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
								onChange={onInputChange}
								noLabel
							/>
							<label htmlFor="avatar">a</label>
						</div>
						<div className='col-span-2'>
							<h4 className='mb-5 first-letter:text-4xl first-letter:text-aurora text-xl font-bold'>
								Bio:
							</h4>
							<textarea
								name='bio'
								id='user-bio'
								value={profileData.bio}
								onChange={onInputChange}
							/>
						</div>
					</div>
					<div className='flex mt-4 justify-center'>
						<Button type={isChange ? 'submit' : 'button'}>
							{isChange ? 'Save Changes' : 'No Change'}
						</Button>
					</div>
				</form>
			</div>
		</SettingWrapper>
	);
};

export default UpdateProfile;
