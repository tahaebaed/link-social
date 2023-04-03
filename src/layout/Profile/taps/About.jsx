import React from 'react';
import { BiBuilding } from 'react-icons/bi';
import { BsGenderAmbiguous, BsPhone } from 'react-icons/bs';
import { FaBirthdayCake } from 'react-icons/fa';
import {
	MdDateRange,
	MdDriveFileRenameOutline,
	MdFamilyRestroom,
} from 'react-icons/md';
import { TbBuildingSkyscraper } from 'react-icons/tb';
import { useSelector } from 'react-redux';
import CreatePost from '../../../components/CreatePost';
import PostCard from '../../../components/post/PostCard';
import { timeToX } from '../../../utilities/days';
import { profileSelector } from '../../../utilities/store';

const Timeline = ({ posts = [], username }) => {
	return (
		<>
			{posts.map((post, index) => (
				<PostCard
					key={index}
					userName={username}
					postTime={timeToX(post.created_at)}
					description={post.body}
					likesCount='00'
					commentsCount='00'
					shareCount='00'
				/>
			))}
		</>
	);
};

const SingleBio = (props) => {
	if (props.value) {
		return (
			<div className='flex my-5 items-center'>
				<div className='flex justify-center items-center'>
					<props.icon className='text-4xl text-aurora' />
				</div>
				<div className='mx-2'>
					<h4 className='font-semibold text-base'>{props.title}:</h4>
					<p className='text-gray-500 text-sm'>{props.value}</p>
				</div>
			</div>
		);
	}

	return <></>;
};

SingleBio.defaultProps = {
	icon: MdDriveFileRenameOutline,
	title: 'Title',
	value: '',
};

const BioSidebar = ({ user }) => {
	const BIO_SIDEBAR = [
		{
			icon: MdDriveFileRenameOutline,
			title: 'Username',
			value: user.user.user_name,
		},
		{
			icon: MdDateRange,
			title: 'Joined Date',
			value: user.user.created_at.slice(0, 10),
		},
		{
			icon: BsPhone,
			title: 'Phone',
			value: user.user.phone,
		},
		{
			icon: FaBirthdayCake,
			title: 'Birthday',
			value: user.user.birthday,
		},
		{
			icon: BsGenderAmbiguous,
			title: 'Gender',
			value: user.user.gender,
		},
		{
			icon: MdFamilyRestroom,
			title: 'Status',
			value: user.user.status,
		},
		{
			icon: TbBuildingSkyscraper,
			title: 'Country',
			value: user.user.country,
		},
		{
			icon: BiBuilding,
			title: 'Region',
			value: user.user.region,
		},
	];
	return (
		<>
			{BIO_SIDEBAR.map((bio, index) => (
				<SingleBio
					key={index}
					title={bio.title}
					value={bio.value}
					icon={bio.icon}
				/>
			))}
		</>
	);
};

function About() {
	const { profile: user } = useSelector(profileSelector.about);
	const { posts } = useSelector(profileSelector.posts);

	return (
		<div className='md:grid grid-cols-3 mt-4'>
			<div className='col-span-1'>
				<div className=' mr-1 shadow-[0_8px_30px_rgba(0,_0,_0,_0.05)] '>
					<div className='p-4 border-b-2 mb-3'>
						<h4 className='first-letter:text-4xl first-letter:text-aurora text-xl font-bold'>
							Bio:
						</h4>
						<p className='text-gray-400 mt-3 text-sm leading-5'>
							{user.description}
						</p>
					</div>
					<div className='p-4'>
						<BioSidebar user={user} />
					</div>
				</div>
			</div>
			<div className='col-span-2'>
				<div className='p-3 ml-1 shadow-[0_8px_30px_rgba(0,_0,_0,_0.05)] '>
					<CreatePost />
					<Timeline posts={posts} username={user.user.user_name} />
				</div>
			</div>
		</div>
	);
}

export default About;
