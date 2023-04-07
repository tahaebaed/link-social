import React, { useState } from 'react';
import CreatePost from '../../components/CreatePost';
import CalendarCard from '../../layout/CalendarCard';
import FriendsList from '../../layout/FriendsList';
import HomeFeeds from '../../layout/HomeFeeds';
import WeatherCard from '../../layout/WeatherCard';
import { FaUserFriends } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { AiOutlineAppstore } from 'react-icons/ai';

function Homepage() {
	const [showSideList, setshowSideList] = useState(false);
	const [showLeftCanvas, setshowLeftCanvas] = useState(false);
	const showSideMenu = () => {
		setshowSideList(!showSideList);
	};
	const openLeftCanvas = () => {
		setshowLeftCanvas(!showLeftCanvas);
	};
	return (
		<div>
			<div className='mobile_leftMenu'>
				{/* <OffCanvas showCanvas={showLeftCanvas} /> */}
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
			<div
				className={`mobile_icons fixed top-[12vh] bg-slate-100 rounded p-4 transition-all ease-in-out duration-1000 ${
					showSideList ? 'right-0' : 'right-[-68px]'
				}`}
			>
				<div className='show_friendsList mx-2 my-4 cursor-pointer'>
					<FaUserFriends className='text-fuchsia-600 w-[20px]' />
				</div>
				<div className='show_leftSidebar mx-2 my-4 cursor-pointer'>
					<AiOutlineAppstore
						onClick={openLeftCanvas}
						className='text-pink-600 w-[20px] h-[25px]'
					/>
				</div>
				<div
					id='showList'
					className={`absolute top-[32%] left-[-30%] text-white bg-aurora w-[20px] h-[30px] rounded-[3px] flex justify-center items-center cursor-pointer`}
					onClick={showSideMenu}
				>
					{showSideList ? <IoIosArrowForward /> : <IoIosArrowBack />}
				</div>
			</div>
		</div>
	);
}

export default Homepage;
