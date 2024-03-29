import React, { useEffect, useState } from 'react';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import Button from '../../components/Button';
import Loader from '../../components/Loader';
import usePageTitle from '../../hooks/usePageTitle';
import { Navs, Taps } from '../../layout/Profile/TapsAndNavs';
import { profileSelector } from '../../utilities/store';
import { getUser, getUserPosts } from '../../utilities/store/profile.slice';
import { FiUserCheck, FiUserPlus } from 'react-icons/fi';
import {
	showFollowUser,
	toggleFollowUser,
} from '../../utilities/store/follow.slice';
import { BiLoader } from 'react-icons/bi';

const Profile = () => {
	usePageTitle('Profile');
	const dispatch = useDispatch();
	const params = useParams();
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
		dispatch(showFollowUser(params?.profileId));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [params?.profileId]);

	const onActiveTapChange = (tapId) => {
		setActiveTap(tapId);
		setSearchParams((prev) => {
			prev.set('activeTap', tapId);
			return prev;
		});
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
								<FollowButton profile={profile} />
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

const FollowButton = (props) => {
	const { profile } = props;

	const dispatch = useDispatch();
	const userId = useSelector((store) => store['auth']['user']['id']);
	const { isLoading, following } = useSelector((store) => store['follow']);

	// user show it's profile, return nothing
	if (userId === profile?.id) {
		return <></>;
	}

	let btn;

	if (isLoading) {
		btn = {
			body: 'Loading',
			icon: BiLoader,
			outline: true,
			disabled: true,
		};
	} else {
		btn = following
			? {
					body: 'Followed',
					icon: FiUserCheck,
					outline: true,
					disabled: false,
			  }
			: {
					body: 'Follow',
					icon: FiUserPlus,
					outline: false,
					disabled: false,
			  };
	}

	const onFollowBtnClick = () => {
		dispatch(toggleFollowUser(profile.id));
	};

	return (
		<>
			<Button
				className='font-bold mx-2 flex items-center'
				outline={btn.outline}
				onClick={onFollowBtnClick}
				disabled={btn.disabled}
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

export default Profile;
