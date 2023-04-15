import React from 'react';
import { Link } from 'react-router-dom';
import { IoPersonAdd } from 'react-icons/io5';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import Button from './Button';

function FriendCard({ friend }) {
	return (
		<div className='shadow-[0_8px_30px_rgba(0,_0,_0,_0.05)]'>
			<img
				src={friend?.profile?.cover || friend.cover}
				alt={friend.first_name + '-cover'}
				className='mb-3 rounded h-48 w-full object-cover max-w-full'
			/>
			<div className='relative md:flex items-center mt-4'>
				<img
					src={friend?.profile?.avatar || friend.avatar}
					alt={friend.first_name + '-avatar'}
					className='object-cover border-white w-28 h-28 absolute rounded-full border-4 top-[-60px] left-1/2 translate-x-[-50%] z-10'
				/>
				<div className='mx-auto mt-8 p-4 text-center'>
					<Link
						to={`/profile/${friend.id}`}
						className='text-2xl font-bold hover:text-aurora transition-all duration-300 inline-block mt-10 md:mt-0'
					>
						{friend.first_name || friend.user.first_name}{' '}
						{friend.last_name || friend.user.last_name}
					</Link>
					<div className='text-gray-400 text-sm'>
						{friend.email || friend.user.email}
					</div>
				</div>
			</div>
			<div className='flex justify-center pb-4'>
				<Button
					as={Link}
					to={`/add-friend/${friend.id}`}
					className='font-bold mx-2 flex items-center'
				>
					<IoPersonAdd className='inline-block mr-2' />
					<span>Follow</span>
				</Button>
				<Button as={Link} to={`/message/${friend.id}`} outline lg>
					<HiOutlineChatBubbleLeftRight />
				</Button>
			</div>
		</div>
	);
}

export default FriendCard;
