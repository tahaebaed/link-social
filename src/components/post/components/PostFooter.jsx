import React, { useEffect } from 'react';
import { FaHeart, FaRegHeart, FaShare } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { users } from '../../../utilities/dummydata/users';
import { BiMessageDetail } from 'react-icons/bi';
import {
	getReacts,
	postReacts,
} from '../../../utilities/store/posts_reducer/postReactsExtraReducer';

function PostFooter({
	commentsCount,
	shareCount,
	likeState,
	postId,
	likesCount,
	reacts,
}) {
	const dispatch = useDispatch();

	const ReactToPost = () => {
		// send api request to change react state
		dispatch(postReacts(postId));
	};
	return (
		<>
			<div className='flex justify-between items-center post_reactions my-3 py-3'>
				<div className='flex'>
					<div className='flex items-center post_likes'>
						{likeState ? (
							<FaHeart className='heart_icon' onClick={ReactToPost} />
						) : (
							<FaRegHeart className='heart_icon' onClick={ReactToPost} />
						)}

						<span className='ml-1 mr-3 likes_count'>{likesCount}</span>
					</div>
					{/* <div className='flex items-center'>
						<ul className='ml-3 users_likes'>
							{reacts?.map((user, i) =>
								i < 3 ? (
									<li key={i} className='user_like_img'>
										<a
											className='rounded-full w-[2rem] h-[2rem]'
											href='https://www.google.com'
										>
											<img
												className='w-full h-full'
												src={user?.user.profile.avatar}
												alt=''
											/>
										</a>
									</li>
								) : (
									''
								)
							)}
						</ul>
						<div className='users_liked_name ml-3'>
							<p>
								<span className='font-bold'>{reacts[0]?.user.user_name}</span>
								and {reacts.length - 1} others
							</p>
						</div>
					</div> */}
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
		</>
	);
}

export default PostFooter;
