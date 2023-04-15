import React, { useEffect, useState } from 'react';
import profilePic from '../assets/images/imgs/profilePic.png';
function ProfileImg({ img = profilePic, border, online, ...props }) {
	const [className, setClassName] = useState('');
	const [onlineState, setOnlineState] = useState('');
	useEffect(() => {
		let initClass =
			`rounded-full object-cover p-1 w-[45px] h-[45px] ` + props.className;
		let initOnline = `profile_img relative`;

		initClass += border ? ' border border-emerald-400' : '';
		initOnline += online
			? ` before:content-[''] before:absolute before:w-[10px] before:h-[10px] before:bg-aurora before:rounded-full before:left-1 `
			: '';
		setClassName(initClass);
		setOnlineState(initOnline);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div className={onlineState}>
			<img {...props} className={className} src={`${img}`} alt='profile img' />
		</div>
	);
}
ProfileImg.defaultProps = {
	border: false,
	className: '',
};

export default ProfileImg;
