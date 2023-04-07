import { FaRegHeart, FaShare, FaHeart } from 'react-icons/fa';
import { BiMessageDetail } from 'react-icons/bi';
import { users } from '../../utilities/dummydata/users';
import './../../assets/scss/components/postCard.scss';
import profilePic from '../../assets/images/imgs/profilePic.png';
import Dropdown from '../Dropdown';
import ProfileImg from '../ProfileImg';
import { userInterceptor } from '../../apps/axiosInstance';
import { updatePostRect } from '../../utilities/store/posts_reducer/postsSlice';
import { useDispatch } from 'react-redux';

/**
 * 
 * @param {string} Img to pass a dynamic profile picture
 * @param {string} userName username of the post creator
 * @param {string} postTime time of the post was created in
 * @param {string} description the content of the post that user wrote   
 * @param {string} likesCount count of how many people liked the post
 * @param {string} commentsCount how many people commented on the post   
 * @param {string} shareCount how many people shared the post   
  
 */

function PostCard({
	Img = profilePic,
	userName,
	postTime,
	description,
	likesCount,
	commentsCount,
	shareCount,
	postId,
	likeState,
}) {
	const dispatch = useDispatch();
	const ReactToPost = () => {
		userInterceptor
			.request({
				method: 'POST',
				url: `/reacts/post/${postId}`,
			})
			.then((res) => {
				const reactsCount = res.data.data.reacts.length;
				console.log(res, 'react');
				dispatch(updatePostRect({ reactsCount, postId }));
			});
	};
	return (
		<>
			<div className='card_box sh shadow my-4 mx-2'>
				<div className='flex mb-3 justify-between'>
					<div className='flex items-center'>
						<ProfileImg border img={Img} />
						<div className='mx-3'>
							<h6 className='user_name'>{userName}</h6>
							<span className='post_time'>{postTime}</span>
						</div>
					</div>

					<div className='post_menu_dots flex items-center justify-center'>
						<Dropdown noArrow />
					</div>
				</div>
				<div className='post_content'>
					<p>{description}</p>
				</div>

				<div className='flex justify-between items-center post_reactions my-3 py-3'>
					<div className='flex'>
						<div className='flex items-center post_likes'>
							{likeState ? (
								<FaHeart
									className='heart_icon'
									onClick={() => ReactToPost(postId)}
								/>
							) : (
								<FaRegHeart
									className='heart_icon'
									onClick={() => ReactToPost(postId)}
								/>
							)}

							<span className='ml-1 mr-3 likes_count'>{likesCount}</span>
						</div>
						<div className='flex items-center'>
							<ul className='ml-3 users_likes'>
								{users.map((user, i) => (
									<li key={i} className='user_like_img'>
										<a
											className='rounded-full w-[2rem] h-[2rem]'
											href='https://www.google.com'
										>
											<img
												className='w-full h-full'
												src={user.userImg}
												alt=''
											/>
										</a>
									</li>
								))}
							</ul>
							<div className='users_liked_name ml-3'>
								<p>
									<span className='font-bold'>{users[0].userName}</span> and{' '}
									{users.length - 1} others
								</p>
							</div>
						</div>
					</div>
					<div className='flex items-center post_icons'>
						<div className='flex items-center post_comments'>
							<BiMessageDetail className='post_comment_icon' />
							<span className='mx-3'>{commentsCount}</span>
						</div>
						<div className='post_share flex items-center'>
							<FaShare className='share_post_icon' />
							<span className='mx-3'>{shareCount}</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default PostCard;
