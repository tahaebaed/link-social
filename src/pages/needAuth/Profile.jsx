import React, { useEffect, useState } from 'react';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import { IoPersonAdd } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import Button from '../../components/Button';
import Loader from '../../components/Loader';
import usePageTitle from '../../hooks/usePageTitle';
import { Navs, Taps } from '../../layout/Profile/TapsAndNavs';
import { profileSelector } from '../../utilities/store';
import { getUser, getUserPosts } from '../../utilities/store/profile.slice';
import { FiUserCheck, FiUserPlus } from 'react-icons/fi';
import { toggleFollowUser } from '../../utilities/store/follow.slice';

const Profile = () => {
	usePageTitle('Profile');
	const dispatch = useDispatch();
	const params = useParams();
	const userId = useSelector((store) => store['auth']['user']['id']);
	const { isLoading, error, profile } = useSelector(profileSelector.about);
	const [searchParams, setSearchParams] = useSearchParams();
	const [activeTap, setActiveTap] = useState('about');

	useEffect(() => {
		const sp = searchParams.get('activeTap');
		if (sp) {
			setActiveTap(sp);
		}
	}, [searchParams]);

	useEffect(() => {
		dispatch(getUser(params?.profileId));
		dispatch(getUserPosts(params?.profileId));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [params?.profileId]);

	const onActiveTapChange = (tapId) => {
		setActiveTap(tapId);
		setSearchParams((prev) => {
			prev.set('activeTap', tapId);
			return prev;
		});
	};

	const onFollowBtnClick = () => {
		dispatch(toggleFollowUser(params?.profileId));
	};

	const FollowButton = () => {
		// user show it's profile, return nothing
		if (userId === profile?.id) {
			return <></>;
		}

		const user = profile.followers.find((user) => user.id === userId);
		let btn = user
			? {
					body: 'Follow',
					icon: FiUserPlus,
					outline: false,
			  }
			: {
					body: 'Followed',
					icon: FiUserCheck,
					outline: true,
			  };

		return (
			<>
				<Button
					className='font-bold mx-2 flex items-center'
					outline={btn.outline}
					onClick={onFollowBtnClick}
				>
					<btn.icon className='inline-block mr-2' />
					<span>{btn.body}</span>
				</Button>
				<Button as={Link} to={`/message/${profile.id}`} outline lg>
					<HiOutlineChatBubbleLeftRight />
				</Button>
			</>
		);
	};

	if (isLoading) {
		return (
			<div className=' col-span-4 lg:col-span-3'>
				<Loader />
			</div>
		);
	} else if (error) {
		return <pre>{JSON.stringify(error)}</pre>;
	} else if (profile) {
		return (
			<div className=' col-span-4 lg:col-span-3'>
				<div className='p-3 shadow-[0_8px_30px_rgba(0,_0,_0,_0.05)]'>
					<img
						src={profile.cover}
						alt={profile.user.first_name + '-cover'}
						className='mb-3 rounded-xl h-[250px] w-full object-cover max-w-full'
					/>
					<div className='relative md:flex items-center my-4'>
						<img
							src={profile.avatar}
							alt={profile.user.first_name + '-avatar'}
							className='object-cover border-white w-28 h-28 absolute rounded-full border-4 top-[-40px] left-[30px] z-10'
						/>
						<div className='pl-40'>
							<h3 className='text-2xl font-bold'>
								{profile.user.first_name} {profile.user.last_name}
							</h3>
							<div className='text-gray-400 text-sm'>{profile.user.email}</div>
						</div>
						<div className='ml-auto mt-4 md:mt-0'>
							<div className='flex justify-end'>
								<FollowButton />
							</div>
						</div>
					</div>
					<div>
						<Taps activeTap={activeTap} onActiveTapChange={onActiveTapChange} />
					</div>
				</div>
				<Navs activeTap={activeTap} />
			</div>
		);
	} else {
		return <div className=' col-span-4 lg:col-span-3'>no user found</div>;
	}
};

export default Profile;
