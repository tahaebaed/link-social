import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PostCard from '../components/post/PostCard';
import { VscFeedback } from 'react-icons/vsc';
import { store } from '../utilities/store/index';
import { getPosts } from '../utilities/store/posts_reducer/postsSlice';
import LoadingPlaceholder from '../components/placeholder/LoadingPlaceholder';
import { timeToX } from '../utilities/days';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loadingdots from '../components/Loadingdots';

function HomeFeeds() {
	const { posts, loading, error } = useSelector((store) => store.postsReducer);
	useEffect(() => {
		store.dispatch(getPosts());
	}, []);
	const getMorePosts = () => {
		store.dispatch(getPosts());
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
		return (
			<>
				{posts.length > 0 ? (
					<div>
						{posts.map((post, i) => (
							<div key={i}>
								<PostCard
									userName={post.user.user_name}
									postTime={timeToX(post.created_at)}
									description={post.body}
									likesCount={post.reacts_count}
									commentsCount={posts.comments_count}
									shareCount='14'
									postId={post.id}
									likeState={post.is_react}
								/>
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
	}
}

export default HomeFeeds;
