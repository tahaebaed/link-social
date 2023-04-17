import React, { createRef, useEffect, useState } from 'react';
import { AiOutlineAppstore } from 'react-icons/ai';
import { FaUserFriends } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function MobileMenu(props) {
	const [showList, setShowList] = useState(false);
	const [MenuRef] = useState(createRef());
	const [toggleRef] = useState(createRef());
	const showSideMenu = () => {
		setShowList((prev) => !prev);
	};

	useEffect(() => {
		document.addEventListener('click', onClickOutside);
		return () => {
			document.removeEventListener('click', onClickOutside);
		};
	}, []);
	const onClickOutside = (event) => {
		if (
			!MenuRef.current?.contains(event.target) &&
			!toggleRef.current?.contains(event.target)
		) {
			setShowList(false);
		}
	};

	return (
		<div
			className={`mobile_icons fixed top-[12vh] bg-slate-100 rounded p-4 transition-all ease-in-out duration-1000 ${
				showList ? 'right-0' : 'right-[-68px]'
			}`}
			ref={MenuRef}
		>
			{props.children}
			<div
				className={`absolute top-[32%] left-[-42%] text-white bg-aurora w-[30px] h-[40px] rounded-[3px] flex justify-center items-center cursor-pointer`}
				onClick={showSideMenu}
				ref={toggleRef}
			>
				{showList ? (
					<button>
						<IoIosArrowForward />
					</button>
				) : (
					<span>
						<IoIosArrowBack />
					</span>
				)}
			</div>
		</div>
	);
}
MobileMenu.defaultProps = {
	children: (
		<div>
			<div className='show_friendsList mx-2 my-4 cursor-pointer'>
				<FaUserFriends className='text-fuchsia-600 w-[20px]' />
			</div>
			<div className='show_leftSidebar mx-2 my-4 cursor-pointer'>
				<AiOutlineAppstore className='text-pink-600 w-[20px] h-[25px]' />
			</div>
		</div>
	),
};
export default MobileMenu;
