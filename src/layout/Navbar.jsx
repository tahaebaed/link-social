import React from 'react';
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
				<div className='navbar-wrapper grid grid-cols-3 items-center'>
					<div className='favicon col-span-1'>
						<img src={favicon} alt='favicon' width={100} />
					</div>
					<div className='navbar-menu col-span-2 hidden md:block'>
						<div className='grid grid-cols-5 items-center'>
							<div className='navbar-search col-span-2'>
								<QuerySearch />
							</div>
							<div className='col-span-1'>
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
							<div className='col-span-2'>
								<div className='flex justify-end'>
									<UserDropdown />
								</div>
							</div>
						</div>
					</div>
					<div className='navbar-mobile-menu col-span-2 md:hidden'>
						<MobileMenu />
					</div>
				</div>
			</div>
		</nav>
	);
}


export default Navbar;
