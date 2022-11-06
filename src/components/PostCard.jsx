import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { FaRegHeart, FaShare } from 'react-icons/fa';
import { BiMessageDetail } from 'react-icons/bi';
import { users } from '../utilities/dummydata/users';
function PostCard({
	profileImg,
	userName,
	postTime,
	cardWidth,
	postDescription,
	likesCount,
	commentsCount,
	shareCount,
}) {
	return (
		<>
			<div className={`card_box ${cardWidth}`}>
				<div className='flex mb-3 justify-between'>
					<div className='flex items-center'>
						<div className='profile_img'>
							<img
								className='rounded-full'
								src={profileImg}
								alt='profile img'
							/>
						</div>
						<div className='mx-6'>
							<h6 className='user_name'>{userName}</h6>
							<span className='post_time'>{postTime}</span>
						</div>
					</div>

					<div className='post_menu_dots flex items-center justify-center'>
						<BsThreeDots />
					</div>
				</div>
				<div className='post_content'>
					<p>{postDescription}</p>
				</div>

				<div className='flex justify-between items-center post_reactions my-5 py-4'>
					<div className='flex'>
						<div className='flex items-center post_likes'>
							<FaRegHeart className='heart_icon' />
							<span className='mx-3 likes_count'>{likesCount}</span>
						</div>
						<div className='flex items-center'>
							<ul className='ml-4 users_likes'>
								{users.map((user) => (
									<li className='user_like_img'>
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
// import PostCard from './components/PostCard'
// import img from './assets/945269373692706886.webp'
// import LoadingPlaceholder from './components/LoadingPlaceholder'
//let des = "Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque."
{
	/* <PostCard profileImg={img} userName="James Spiegel" postTime="19 hours ago" cardWidth='w-[35rem]' postDescription={des} likesCount="8" commentsCount="17" shareCount="14" />

<LoadingPlaceholder imgWidth="w-[40px]" imgheight="h-[40px]" carWidth="w-[35rem]" cardHeight="h-[315px]" authorWidth="w-[102px]" authorHeight="h-[18px]" bigBlockWidth="w-[120px]" smallBlockWidth="w-[80px]" btnWidth="w-[120px]" /> */
}
export default PostCard;
