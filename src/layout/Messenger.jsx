import { Drawer, ScrollArea } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import React from 'react';
import { AiOutlineAppstore } from 'react-icons/ai';
import { FaUserFriends } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';
import MobileMenu from '../components/MobileMenu';
import ChatsList from '../components/chat/ChatsList';
import CalendarCard from './CalendarCard';
import FriendsList from './FriendsList';
import Navbar from './Navbar';
import WeatherCard from './WeatherCard';
import { useSelector } from 'react-redux';

function Messenger() {
	const [featureOpened, featureHandler] = useDisclosure(false);
	const [friendsOpened, friendsHandler] = useDisclosure(false);
	const contact = useSelector((store) => store['chat']['contact']);
	const isMobile = useMediaQuery('(max-width: 1024px)');

	return (
		<>
			<Navbar />

			<Drawer
				opened={featureOpened}
				onClose={featureHandler.close}
				title='Features'
				overlayProps={{ opacity: 0.5, blur: 4 }}
			>
				<WeatherCard />
				<CalendarCard />
			</Drawer>

			<Drawer
				opened={friendsOpened}
				onClose={friendsHandler.close}
				title='Friends'
				overlayProps={{ opacity: 0.5, blur: 4 }}
				scrollAreaComponent={ScrollArea.Autosize}
			>
				<FriendsList />
			</Drawer>

			<div className='lg:hidden'>
				<MobileMenu>
					<div className='show_friendsList mx-2 my-4 cursor-pointer'>
						<FaUserFriends
							className='text-fuchsia-600 w-[20px]'
							onClick={() => friendsHandler.open()}
						/>
					</div>
					<div className='show_leftSidebar mx-2 my-4 cursor-pointer'>
						<AiOutlineAppstore
							onClick={() => featureHandler.open()}
							className='text-pink-600 w-[20px] h-[25px]'
						/>
					</div>
				</MobileMenu>
			</div>

			<div className='lg:grid grid-cols-4'>
				<div className='col-span-1 '>
					{!isMobile && <ChatsList />}
					{isMobile && !contact && <ChatsList />}
				</div>
				<div
					className={`col-span-3  ${
						!(isMobile && !contact) ? '' : 'hidden lg:block'
					}`}
				>
					<Outlet />
				</div>
			</div>
		</>
	);
}

export default Messenger;
