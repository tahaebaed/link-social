import React from 'react';

import About from './taps/About';
import Followers from './taps/Followers';
import Photos from './taps/Photos';
import SavedPost from './taps/SavedPost';

const TAPS = [
	{
		title: 'about',
		id: 'about',
		component: About,
	},
	{
		title: 'followers',
		id: 'followers',
		component: Followers,
	},
	{
		title: 'photos',
		id: 'photos',
		component: Photos,
	},
	{
		title: 'Saved Posts',
		id: 'savedPosts',
		component: SavedPost,
	},
];

function Taps(props) {
	const onActiveTapChange = (evt, tapId) => {
		evt.preventDefault();
		props.onActiveTapChange(tapId);
	};

	const navClassName = (isActive) => {
		return `my-2 block border-x-0 border-t-0 border-b-2 px-3 md:px-7 pt-4 pb-3.5 text-xs font-medium uppercase leading-tight transition-all duration-300 ${
			isActive
				? 'text-aurora border-aurora hover:border-gray-500 hover:text-gray-500'
				: 'border-transparent text-gray-500 hover:border-aurora hover:text-aurora'
		}`;
	};

	return (
		<ul className=' flex list-none flex-wrap pl-0 flex-row '>
			{TAPS.map((tp) => (
				<li key={tp.id}>
					<a
						href={`#profile-${tp.id}`}
						className={navClassName(props.activeTap === tp.id)}
						onClick={(evt) => onActiveTapChange(evt, tp.id)}
					>
						{tp.title}
					</a>
				</li>
			))}
		</ul>
	);
}

Taps.defaultProps = {
	activeTap: 'about',
	onActiveTapChange: () => {},
};

function Navs({ activeTap, user }) {
	if (!user) {
		return <>No user data found</>;
	}

	const Nav = TAPS.find((tap) => tap.id === activeTap)?.component;

	if (Nav) {
		return <Nav user={user} />;
	}

	return <About user={user} />;
}

Navs.defaultProps = {
	activeTap: 'about',
	user: null,
};

export { Taps, Navs };
