import React from 'react';
import CreatePost from '../../components/CreatePost';
import usePageTitle from '../../hooks/usePageTitle';
import CalendarCard from '../../layout/CalendarCard';
import FriendsList from '../../layout/FriendsList';
import HomeFeeds from '../../layout/HomeFeeds';
import WeatherCard from '../../layout/WeatherCard';

function Homepage() {
	usePageTitle('Homepage');

	return (
		<div>
			<div className='grid grid-cols-4'>
				<div className='lg:col-span-1 hidden lg:block'>
					<WeatherCard />
					<CalendarCard />
				</div>
				<div className='lg:col-span-2 col-span-4'>
					<CreatePost />

					<div className='mb-4'>
						<HomeFeeds />
					</div>
				</div>
				<div className='lg:col-span-1 hidden lg:block'>
					<FriendsList />
				</div>
			</div>
		</div>
	);
}

export default Homepage;
