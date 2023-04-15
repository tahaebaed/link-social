import './../../assets/scss/components/postCard.scss';
import PostFooter from './components/PostFooter';
import ProfileImg from '../ProfileImg';
import Dropdown from '../Dropdown';
import { Link } from 'react-router-dom';

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
			<div className='card_box sh shadow my-4 mx-2'>
				<div className='flex mb-3 justify-between'>
					<div className='flex items-center'>
						<ProfileImg border img={`${img}`} />
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
