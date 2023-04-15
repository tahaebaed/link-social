import './../../assets/scss/components/postCard.scss';
import profilePic from '../../assets/images/imgs/profilePic.png';
import PostFooter from './components/PostFooter';
import ProfileImg from '../ProfileImg';
import Dropdown from '../Dropdown';

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
	...rest
}) {
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
