import React from 'react';
import { HiOutlineViewList } from 'react-icons/hi';
import Dropdown from '../../components/Dropdown';

function MobileMenu() {
	return (
		<div className='flex justify-end'>
			<Dropdown
				noArrow
				className='humbugger-dropdown'
				label={<HiOutlineViewList className='text-xl' />}
			></Dropdown>
		</div>
	);
}

export default MobileMenu;
