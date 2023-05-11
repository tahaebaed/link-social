import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown';
import Preview from '../Preview';
import ProfileImg from '../ProfileImg';
import PostFooter from './components/PostFooter';

import './../../assets/scss/components/postCard.scss';

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
	img,
	userName,
	postTime,
	description,
	likesCount,
	commentsCount,
	shareCount,
	postId,
	likeState,
	...rest
}) {
	return (
		<>
			<div className='card_box sh shadow my-4'>
				<div className='flex mb-3 justify-between'>
					<div className='flex items-center'>
						<ProfileImg border img={img} />
						<div className='mx-3'>
							<Link to={`/profile/${rest.userId}`}>
								<h6 className='user_name'>{userName}</h6>
							</Link>

							<span className='post_time'>{postTime}</span>
						</div>
					</div>

					<div className='post_menu_dots flex items-center justify-center'>
						<Dropdown noArrow />
					</div>
				</div>
				{description ? (
					<div className='post_content'>
						<p>{description}</p>
					</div>
				) : (
					''
				)}

				{rest?.photos?.length && (
					<div className='my-3'>
						{rest.photos.length === 1 && (
							<Preview
								img={rest.photos[0].path}
								key={rest.photos[0].path}
								noLabel
								className='h-[250px] w-[100%]'
								imageClassName='h-[250px] object-cover w-[100%]'
							/>
						)}
						{rest.photos.length > 1 &&
							rest.photos.map((img) => (
								<Preview
									img={img.path}
									key={img.path}
									noLabel
									className='h-36 w-36'
									imageClassName='h-36 w-36'
								/>
							))}
					</div>
				)}

				<PostFooter
					commentsCount={commentsCount}
					shareCount={shareCount}
					likesCount={likesCount}
					likeState={likeState}
					postId={postId}
					reacts={rest.reacts}
				/>
			</div>
		</>
	);
}
export default PostCard;
