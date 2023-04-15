import React from 'react';
import PostFooter from './components/PostFooter';
import ProfileImg from '../ProfileImg';
import Dropdown from '../Dropdown';

function SharedPost({
	userName,
	postTime,
	description,
	img,
	commentsCount,
	shareCount,
	likesCount,
	likeState,
	postId,
	userSharedName,
	sharedUserImg,
	sharedTime,
}) {
	return (
		<div className='card_box sh shadow my-4 mx-2'>
			<div className='shared_info'>
				<div className='flex mb-3 justify-between'>
					<div className='flex items-center'>
						<ProfileImg border img={sharedUserImg} />
						<div className='mx-3'>
							<h6 className='user_name'>{userSharedName}</h6>
							<span className='post_time'>{sharedTime}</span>
						</div>
					</div>

					<div className='post_menu_dots flex items-center justify-center'>
						<Dropdown noArrow />
					</div>
				</div>
			</div>
			<div className='border bottom-0 p-4'>
				<div className='flex mb-3 justify-between'>
					<div className='flex items-center'>
						<ProfileImg border img={img} />
						<div className='mx-3'>
							<h6 className='user_name'>{userName}</h6>
							<span className='post_time'>{postTime}</span>
						</div>
					</div>
				</div>
				<div className='post_content'>
					<p>{description}</p>
				</div>
			</div>
			<PostFooter
				commentsCount={commentsCount}
				shareCount={shareCount}
				likesCount={likesCount}
				likeState={likeState}
				postId={postId}
			/>
		</div>
	);
}

export default SharedPost;
