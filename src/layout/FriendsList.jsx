import { Link } from 'react-router-dom';
import Dropdown from '../components/Dropdown';
import ProfileImg from '../components/ProfileImg';

import '../assets/scss/layout/scrollbar.scss';
import Block from '../components/placeholder/Block';
import { profileSelector } from '../utilities/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserFollow } from '../utilities/store/profile.slice';
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
			<div className={`friends_list fixed right-0 bottom-0 h-[92vh]`}>
				<div className='friends_list_box h-[78.5vh] overflow-auto bottom-0 my-5'>
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
								<Dropdown noArrow>
									<ul>
										<li>
											<a className='dropdown-item' href='#go-to-somewhere'>
												View Profile
											</a>
										</li>
										<li>
											<a className='dropdown-item' href='#go-to-somewhere'>
												View Chat
											</a>
										</li>
									</ul>
								</Dropdown>
							</div>
						</div>
					))}
				</div>
				<div className='show_btn absolute bottom-0 w-full bg-aurora p-4 text-center'>
					<Link to='/chat' className='text-white'>
						Show All Friends
					</Link>
				</div>
			</div>
		);
	}
}

export default FriendsList;
