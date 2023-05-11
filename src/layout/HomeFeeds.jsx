import React, { useEffect } from 'react';
import { VscFeedback } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux';
import Loadingdots from '../components/Loadingdots';
import LoadingPlaceholder from '../components/placeholder/LoadingPlaceholder';
import PostCard from '../components/post/PostCard';
import SharedPost from '../components/post/SharedPost';
import { timeToX } from '../utilities/days';
import { store } from '../utilities/store/index';
import { getPosts } from '../utilities/store/posts_reducer/postsSlice';

function HomeFeeds() {
	const dispatch = useDispatch();
	const { posts, loading, error } = useSelector(
		(store) => store.postsReducer.posts
	);

	useEffect(() => {
		store.dispatch(getPosts(1));
	}, []);
	const getMorePosts = () => {
		dispatch(getPosts());
	};
	if (loading) {
		return (
			<div>
				<div className='my-4'>
					<LoadingPlaceholder />
				</div>
				<div className='my-4'>
					<LoadingPlaceholder />
				</div>
				<div className='my-4'>
					<LoadingPlaceholder />
				</div>
				<div className='my-4'>
					<LoadingPlaceholder />
				</div>
			</div>
		);
	} else if (error) {
		return <pre>{JSON.stringify(error)}</pre>;
	} else if (posts) {
		console.log(posts);
		return (
			<>
				{posts.length > 0 ? (
					<div>
						{posts.map((post, i) => (
							<div key={i}>
								{post.parent ? (
									<SharedPost
										userName={post.parent.user.user_name}
										postTime={timeToX(post.parent.created_at)}
										description={post.parent.body}
										likesCount={post.parent.reacts_count}
										commentsCount={post.parent.comments_count}
										shareCount={post.parent.children_count}
										postId={post.parent.id}
										likeState={post.is_react}
										img={post.parent.user.profile.avatar}
										userSharedName={post.user.user_name}
										sharedUserImg={post.parent.user.profile.avatar}
										sharedTime={timeToX(post.created_at)}
										userId={post.parent.user_id}
										photos={post.photos || []}
									/>
								) : (
									<PostCard
										userName={post.user?.user_name}
										postTime={timeToX(post.created_at)}
										description={post.body}
										likesCount={post.reacts_count}
										commentsCount={posts.comments_count}
										shareCount={post.children_count}
										postId={post.id}
										likeState={post.is_react}
										img={post.user.profile.avatar}
										reacts={post.reacts}
										photos={post.photos || []}
										userId={post.user_id}
									/>
								)}
							</div>
						))}
						<Loadingdots />
						{/* <InfiniteScroll
							dataLength={5}
							next={() => getMorePosts()}
							hasMore={true}
							loader={<h4>Loading...</h4>}
							endMessage={
								<div className='h-40 flex justify-center items-center text-4xl text-center text-gray-400'>
									<div>
										<VscFeedback className='inline-block' />
										<p className='text-sm mt-3'>Yay! You have seen it al</p>
									</div>
								</div>
							}
						/> */}
					</div>
				) : (
					<div className='h-40 flex justify-center items-center text-4xl text-center text-gray-400'>
						<div>
							<VscFeedback className='inline-block' />
							<p className='text-sm mt-3'>No Posts Yet</p>
						</div>
					</div>
				)}
			</>
		);
	} else {
		return <>something wrong</>;
	}
}

export default HomeFeeds;
