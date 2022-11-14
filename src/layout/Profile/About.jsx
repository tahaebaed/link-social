import axios from 'axios';
import React, { useEffect, useState } from 'react';

const About = () => {
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
	console.log(response);

	return (
		<>
			{response && (
				<div className='user__details border rounded m-5 bg-white shadow-md'>
					<h4 className='user__details-title border-b border-gray-300 p-3  font-medium'>
						Personal Information
					</h4>
					<div className='user__details-content p-3 flex flex-wrap'>
						<div className='w-1/2 mb-5'>
							<div className='font-semibold mr-1 '> Name: </div>
							<p className='p-2 text-neutral-500'>
								{response.profile.user.user_name}
							</p>
						</div>
						<div className='w-1/2 mb-5'>
							<span className='font-semibold mr-1'> Email: </span>
							<p className='p-2 text-neutral-500'>
								{response.profile.user.email}
							</p>
						</div>
						<div className='w-1/2 mb-5'>
							<span className='font-semibold '> Phone: </span>
							<p className='p-2 text-neutral-500'>
								{response.profile.user.phone}
							</p>
						</div>
						<div className='w-1/2 mb-5'>
							<span className='font-semibold mr-1'> Gender: </span>
							<p className='p-2 text-neutral-500'>
								{response.profile.user.gender}
							</p>
						</div>
						<div className='w-1/2 mb-5'>
							<span className='font-semibold mr-1'> Joined: </span>
							<p className='p-2 text-slate-600'>
								{response.profile.user.created_at}
							</p>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default About;
