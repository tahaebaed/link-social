import React from 'react';
import CreatePost from '../../components/CreatePost';
import PostCard from '../../components/PostCard';
import CalendarCard from '../../layout/CalendarCard';
import FriendsList from '../../layout/FriendsList';
import HomeFeeds from '../../layout/HomeFeeds';
import WeatherCard from '../../layout/WeatherCard';

function Homepage() {
	return (
		<div>
			<div className='grid grid-cols-4'>
				<div className='col-span-1'>
					<WeatherCard />
					<CalendarCard />
				</div>
				<div className='col-span-2'>
					<CreatePost />

					<div className='mb-4'>
						<HomeFeeds />
					</div>
				</div>
				<div className='col-span-1'>
					<FriendsList />
				</div>
			</div>
		</div>
	);
}

export default Homepage;
