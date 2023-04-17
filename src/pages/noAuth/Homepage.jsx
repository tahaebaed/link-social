import React, { useState } from 'react';
import CreatePost from '../../components/CreatePost';
import CalendarCard from '../../layout/CalendarCard';
import FriendsList from '../../layout/FriendsList';
import HomeFeeds from '../../layout/HomeFeeds';
import WeatherCard from '../../layout/WeatherCard';
import { FaUserFriends } from 'react-icons/fa';
import { AiFillCloseCircle, AiOutlineAppstore } from 'react-icons/ai';
import MobileMenu from '../../components/MobileMenu';

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
				<div
					className={`overlay h-full w-full fixed top-0  transition-opacity transition-bg ease-in-out duration-1000
					${showCanvas ? 'bg-black opacity-80 z-[60]' : 'z-[-1]'} 
					`}
				></div>

				<div
					className={`fixed top-0 h-[100vh] bg-white w-1/2  transition-all ease-in-out duration-1000 ${
						showCanvas ? 'z-[70] left-0' : 'left-[-50%]'
					}`}
				>
					<div className='flex justify-between my-5 mx-3' onClick={closeCanvas}>
						<p className='text-lg text-slate-500 font-bold'>Features</p>
						<div>
							<AiFillCloseCircle className='text-3xl text-teal-400 cursor-pointer' />
						</div>
					</div>
					<div className='left_menu flex-col h-[88vh] overflow-auto'>
						<WeatherCard />
						<CalendarCard />
					</div>
				</div>
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
			<div className='lg:hidden'>
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
		</div>
	);
}

export default Homepage;
