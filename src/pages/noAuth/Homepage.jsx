import React, { useState } from 'react';
import CreatePost from '../../components/CreatePost';
import CalendarCard from '../../layout/CalendarCard';
import FriendsList from '../../layout/FriendsList';
import HomeFeeds from '../../layout/HomeFeeds';
import WeatherCard from '../../layout/WeatherCard';
import { FaUserFriends } from 'react-icons/fa';
import { AiFillCloseCircle, AiOutlineAppstore } from 'react-icons/ai';
import OffCanvas from '../../components/OffCanvas';
import MobileMenu from '../../components/post/MobileMenu';


function Homepage(props) {
	const [showCanvas, setshowCanvas] = useState(false);
	const openCanvas = () => {
		setshowCanvas(true);
	};
	const closeCanvas = () => {
		setshowCanvas(false);
	};

	return (
		<div>
			<div className='mobile_leftMenu'>
				{showCanvas ? (
					<OffCanvas openCanvas={showCanvas}>
						<div onClick={closeCanvas}>
							<AiFillCloseCircle className='text-red-400' />
						</div>
						<p>OffCanvas</p>
					</OffCanvas>
				) : (
					''
				)}
			</div>
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
			<MobileMenu>
				<div className='show_friendsList mx-2 my-4 cursor-pointer'>
					<FaUserFriends className='text-fuchsia-600 w-[20px]' />
				</div>
				<div className='show_leftSidebar mx-2 my-4 cursor-pointer'>
					<AiOutlineAppstore
						onClick={openCanvas}
						className='text-pink-600 w-[20px] h-[25px]'
					/>
				</div>
			</MobileMenu>
		</div>
	);
}

export default Homepage;
