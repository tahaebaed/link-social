import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import ProfileNavbar from '../../layout/Profile/ProfileNavbar';
import ProfileSidebar from '../../layout/Profile/ProfileSidebar';
import './../../assets/scss/components/profile.scss';

const Profile = () => {
	const [response, setResponse] = useState(null);
	useEffect(() => {
		getData();
	}, []);
	// Fetching data
	const getData = async () => {
		await axios
			.get('https://link-social.up.railway.app/api/v1/profiles/10')
			.then((res) => {
				setResponse(res.data.data);
			})
			.catch((error) => {
				// handle error
				console.log(error);
			});
	};

	return (
		<div className='bg-slate-100'>
			{response && (
				<div className='container'>
					<div className='profile__header relative'>
						<img
							src={
								response.profile.cover
									? `https://link-social.up.railway.app/${response.profile.cover}`
									: 'https://via.placeholder.com/150'
							}
							alt={response.profile.user.user_name}
							className='bg__image  rounded-t-xl h-[40vh] w-full  object-fill'
						/>
						<img
							src={
								response.profile.avatar
									? `https://link-social.up.railway.app/${response.profile.avatar}`
									: 'https://via.placeholder.com/150'
							}
							alt={response.profile.user.user_name}
							className='profile-img object-contain absolute rounded-full top-[55%] border-4 left-2/4 translate-x-[-50%] z-10'
						/>
						<ProfileNavbar
							username={response.profile.user.user_name}
							useremail={response.profile.user.email}
						/>
					</div>
					<div className='profile__body flex flex-wrap'>
						<div className='flex-auto md:w-1/3 '>
							<ProfileSidebar data={response.profile} />
						</div>
						<div className='flex-auto w-full md:w-2/3'>
							<Outlet />
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Profile;
