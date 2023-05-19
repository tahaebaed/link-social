import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Dropdown from '../components/Dropdown';
import ProfileImg from '../components/ProfileImg';
import Block from '../components/placeholder/Block';
import { profileSelector } from '../utilities/store';
import { getUserFollow } from '../utilities/store/profile.slice';

import '../assets/scss/layout/scrollbar.scss';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';

function FriendsList() {
	const dispatch = useDispatch();
	const { isLoading, following } = useSelector(profileSelector.follow);
	const user = useSelector((store) => store['auth']['user']);
	useEffect(() => {
		dispatch(getUserFollow(user.profile.id));
	}, []);

	if (isLoading) {
		return (
			<>
				<div className='m-4 grid grid-cols-6 items-center'>
					<div className='col-span-1'>
						<Block rounded />
					</div>
					<div className='mx-3 col-span-4'>
						<Block sm />
					</div>
				</div>
				<div className='m-4 grid grid-cols-6 items-center'>
					<div className='col-span-1'>
						<Block rounded />
					</div>
					<div className='mx-3 col-span-4'>
						<Block sm />
					</div>
				</div>
				<div className='m-4 grid grid-cols-6 items-center'>
					<div className='col-span-1'>
						<Block rounded />
					</div>
					<div className='mx-3 col-span-4'>
						<Block sm />
					</div>
				</div>
			</>
		);
	} else if (following) {
		return (
			<div className={`friends_list sticky top-[90px]`}>
				<div className='friends_list_box overflow-auto h-[calc(100vh_-_168px)] my-5'>
					{following.map((friend, i) => (
						<div className='sigle_user m-4 grid grid-cols-6' key={i}>
							<div className='user_img col-span-1'>
								<ProfileImg
									online
									className='border border-gray-200'
									img={friend.avatar}
								/>
							</div>
							<div className='mx-3 col-span-4'>
								<Link to={`/profile/${friend.id}`}>
									<p className='text-sm font-medium text-gray-700'>
										{friend.user.first_name} {friend.user.last_name}
									</p>
								</Link>

								<p className='text-xs text-gray-400'>online</p>
							</div>
							<div className='col-span-1'>
								<Link to={`/chat/${friend.id}`}>
									<HiOutlineChatBubbleLeftRight className='text-gray-400 text-xl' />
								</Link>
							</div>
						</div>
					))}
				</div>
				<div className='show_btn w-full bg-aurora p-4 text-center'>
					<Link to='/chat' className='text-white'>
						Show All Friends
					</Link>
				</div>
			</div>
		);
	} else {
		return <>something wrong</>;
	}
}

export default FriendsList;
