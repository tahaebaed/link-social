import React from 'react';
import CreatePost from '../../components/CreatePost';
import usePageTitle from '../../hooks/usePageTitle';
import FriendsList from '../../layout/FriendsList';
import HomeFeeds from '../../layout/HomeFeeds';

function Homepage() {
	usePageTitle('Homepage');

	return (
		<>
			<div className='lg:col-span-2 col-span-4'>
				<CreatePost />

				<div className='mb-4'>
					<HomeFeeds />
				</div>
			</div>
			<div className='lg:col-span-1 hidden lg:block'>
				<FriendsList />
			</div>
		</>
	);
}

export default Homepage;
