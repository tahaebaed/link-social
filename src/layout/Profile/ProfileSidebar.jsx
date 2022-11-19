import React from 'react';

const ProfileSidebar = (props) => {
	return (
		<div className='profile_data border rounded-xl my-5 mr-5 shadow-md bg-white'>
			<h4 className='border-b border-gray-300 py-3 pl-3 font-medium'>
				Profile Info
			</h4>
			<div className='content px-3 pb-10 pt-3'>
				<h5 className='font-medium'>Bio:</h5>
				<p>{props.data.description}</p>
			</div>
		</div>
	);
};

export default ProfileSidebar;
