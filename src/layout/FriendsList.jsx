import { Link } from 'react-router-dom';
import Dropdown from '../components/Dropdown';
import ProfileImg from '../components/ProfileImg';
import { friends } from '../utilities/dummydata/users';
import '../assets/scss/layout/friendList.scss';
function FriendsList() {
	return (
		<div className={`friends_list fixed right-0 bottom-0 h-[92vh]`}>
			<div className='friends_list_box h-[78.5vh] overflow-auto bottom-0 my-5'>
				{friends.map((friend, i) => (
					<div className='sigle_user m-4 grid grid-cols-6' key={i}>
						<div className='user_img col-span-1'>
							<ProfileImg
								online
								className='border border-gray-200'
								img={friend.userImg}
							/>
						</div>
						<div className='mx-3 col-span-4'>
							<p className='text-sm font-medium text-gray-700'>
								{friend.firstName} {friend.lassName}
							</p>
							<p className='text-xs text-gray-400'>
								{friend.online ? 'online' : ''}
							</p>
						</div>
						<div className='col-span-1'>
							<Dropdown noArrow>
								<ul>
									<li>
										<a className='dropdown-item' href='#go-to-somewhere'>
											View Profile
										</a>
									</li>
									<li>
										<a className='dropdown-item' href='#go-to-somewhere'>
											View Chat
										</a>
									</li>
								</ul>
							</Dropdown>
						</div>
					</div>
				))}
			</div>
			<div className='show_btn absolute bottom-0 w-full bg-aurora p-4 text-center'>
				<Link to='/auth/sign-in' className='text-white'>
					Show All Friends
				</Link>
			</div>
		</div>
	);
}

export default FriendsList;
