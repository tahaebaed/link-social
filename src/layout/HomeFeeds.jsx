import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Loader from '../components/Loader';
import PostCard from '../components/PostCard';
import { store } from '../utilities/store/index';
import { getPosts } from '../utilities/store/posts_reducer/postsSlice';
function HomeFeeds() {
	useEffect(() => {
		store.dispatch(getPosts());
	}, []);
	const { posts, loading, error } = useSelector((store) => store.postsReducer);

	if (loading) {
		return <Loader />;
	}
	if (error) {
		return error;
	}
	return (
		<div>
			{posts.map((post, i) => (
				<div key={i}>
					<PostCard
						userName='James Spiegel'
						postTime='19 hours ago'
						description={post.body}
						likesCount='8'
						commentsCount='17'
						shareCount='14'
					/>
				</div>
			))}
		</div>
	);
}

export default HomeFeeds;
