import React from 'react';
import { Link } from 'react-router-dom';
import FriendsDropdown from './navbar/FriendsDropdown';
import MessageDropdown from './navbar/MessageDropdown';
import NotificationDropdown from './navbar/NotificationDropdown';
import UserDropdown from './navbar/UserDropdown';
import QuerySearch from './navbar/QuerySearch';
import MobileMenu from './navbar/MobileMenu';
import favicon from '../assets/images/icons/favicon.svg';
import '../assets/scss/layout/navbar.scss';

function Navbar() {
	return (
		<nav className='navbar bg-slate-100 py-3'>
			<div className='container mx-auto'>
				<div className='navbar-wrapper grid md:grid-cols-4 grid-cols-5 items-center'>
					<div className='favicon col-span-2 md:col-span-1'>
						<Link to='/'>
							<img src={favicon} alt='favicon' width={100} />
						</Link>
					</div>
					<div className='navbar-menu md:col-span-3 col-span-2'>
						<div className='md:grid grid-cols-6 items-center'>
							<div className='navbar-search col-span-2 hidden md:block'>
								<QuerySearch />
							</div>
							<div className='col-span-2 justify-self-end'>
								<ul className='flex '>
									<li className='flex mx-2'>
										<FriendsDropdown />
									</li>
									<li className='flex mx-2'>
										<MessageDropdown />
									</li>
									<li className='flex mx-2'>
										<NotificationDropdown />
									</li>
								</ul>
							</div>
							<div className='col-span-2 hidden md:block'>
								<div className='flex justify-end'>
									<UserDropdown />
								</div>
							</div>
						</div>
					</div>
					<div className='navbar-mobile-menu col-span-1 md:hidden'>
						<MobileMenu />
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
