import React, { useEffect } from 'react';
import { FiUsers } from 'react-icons/fi';
import FriendCard from '../../../components/FriendCard';
import { profileSelector } from '../../../utilities/store';
import { useDispatch, useSelector } from 'react-redux';
import { getUserFollow } from '../../../utilities/store/profile.slice';
import { useParams } from 'react-router-dom';

function Followers() {
	const dispatch = useDispatch();
	const params = useParams();
	const { isLoading, error, followers, following } = useSelector(
		profileSelector.follow
	);

	useEffect(() => {
		dispatch(getUserFollow(params?.profileId));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (isLoading) {
		return <>Loading</>;
	} else if (error) {
		return <pre>{JSON.stringify(error)}</pre>;
	} else if (followers) {
		return (
			<div>
				<div className=' mt-4'>
					<div className='p-4  shadow-[0_8px_30px_rgba(0,_0,_0,_0.05)] '>
						<h4 className='first-letter:text-4xl first-letter:text-aurora text-xl font-bold'>
							Followers:
						</h4>

						{followers.length ? (
							<div className='grid grid-cols-6 mt-3'>
								{followers.map((friend) => (
									<div
										className='col-span-6 md:col-span-3 lg:col-span-2 m-3'
										key={friend.id}
									>
										<FriendCard friend={friend} />
									</div>
								))}
							</div>
						) : (
							<div className='h-40 flex justify-center items-center text-4xl text-center text-gray-400'>
								<div>
									<FiUsers className='inline-block' />
									<p className='text-sm mt-3'>No Followers Found</p>
								</div>
							</div>
						)}
					</div>
					<div className='p-4 mt-5 shadow-[0_8px_30px_rgba(0,_0,_0,_0.05)] '>
						<h4 className='first-letter:text-4xl first-letter:text-aurora text-xl font-bold'>
							Following:
						</h4>

						{following.length ? (
							<div className='grid grid-cols-6 mt-3'>
								{following.map((friend) => (
									<div
										className='col-span-6 md:col-span-3 lg:col-span-2 m-3'
										key={friend.id}
									>
										<FriendCard friend={friend} />
									</div>
								))}
							</div>
						) : (
							<div className='h-40 flex justify-center items-center text-4xl text-center text-gray-400'>
								<div>
									<FiUsers className='inline-block' />
									<p className='text-sm mt-3'>No One Follow You</p>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		);
	} else {
		return <>no images found</>;
	}
}

export default Followers;
