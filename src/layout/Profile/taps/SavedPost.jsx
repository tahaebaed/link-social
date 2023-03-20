import React, { useEffect } from 'react';
import { VscFeedback } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux';
import PostCard from '../../../components/PostCard';
import LoadingPlaceholder from '../../../components/placeholder/LoadingPlaceholder';
import { profileSelector } from '../../../utilities/store';
import { getUserSavedPosts } from '../../../utilities/store/profile.slice';

const Timeline = () => {
	return (
		<>
			{[1, 2, 3, 4, 5].map((feed, index) => (
				<div className='col-span-1' key={index}>
					<PostCard
						userName='James Spiegel'
						postTime='19 hours ago'
						description='Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque'
						likesCount='8'
						commentsCount='17'
						shareCount='14'
					/>
				</div>
			))}
		</>
	);
};

function SavedPost() {
	const dispatch = useDispatch();
	const { isLoading, error, saved } = useSelector(profileSelector.saved);

	useEffect(() => {
		dispatch(getUserSavedPosts());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (isLoading) {
		return (
			<div className='grid grid-cols-2 mt-3'>
				<div className='col-span-2 md:col-span-1 m-3'>
					<LoadingPlaceholder />
				</div>
				<div className='col-span-2 md:col-span-1 m-3'>
					<LoadingPlaceholder />
				</div>
				<div className='col-span-2 md:col-span-1 m-3'>
					<LoadingPlaceholder />
				</div>
				<div className='col-span-2 md:col-span-1 m-3'>
					<LoadingPlaceholder />
				</div>
			</div>
		);
	} else if (error) {
		return <pre>{JSON.stringify(error)}</pre>;
	} else {
		return (
			<div className='p-3 ml-1 shadow-[0_8px_30px_rgba(0,_0,_0,_0.05)] '>
				<h4 className='first-letter:text-4xl first-letter:text-aurora text-xl font-bold'>
					Saved Posts:
				</h4>
				{saved.length ? (
					<div className='md:grid grid-cols-2 mt-4'>
						<Timeline />
					</div>
				) : (
					<div className='h-40 flex justify-center items-center text-4xl text-center text-gray-400'>
						<div>
							<VscFeedback className='inline-block' />
							<p className='text-sm mt-3'>No Posts Saved Yet</p>
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default SavedPost;
