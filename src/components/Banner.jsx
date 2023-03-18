import React from 'react';
import bannerOverlay from '../assets/images/background/banner-overlay.webp';
import bannerCover from '../assets/images/background/banner-cover.webp';

/**
 * Create banner with cover and overlay, support title and subtitle

 * @usage

- use `cover` to change Banner background image
- use `overlay` to change overlay image
- use `title` to add Banner title
- use `subtitle` to add Banner subtitle
- use `className` to add class to Banner wrapper

* @example

<Banner title='Profile' subtitle="Welcome to your account dashboard!" />

 * @param {{cover:string, overlay:String, title:string,subtitle:string, className:string}} props 
 * @returns {React.ReactElement}
 */
function Banner(props) {
	return (
		<div
			className={`text-white relative h-96 py-10 bg-aurora ${props.className}`}
			style={{
				background: `center / cover no-repeat  url(${props.cover})`,
			}}
		>
			<div className='text-center px-10 md:px-52'>
				<h1 className='text-3xl mb-3 font-light'>{props.title}</h1>
				<p>{props.subtitle}</p>
			</div>
			{props.overlay && (
				<img src={props.overlay} alt='banner-overlay' className='mt-5 w-full' />
			)}
		</div>
	);
}

Banner.defaultProps = {
	cover: bannerCover,
	overlay: bannerOverlay,
	title: '',
	subtitle: '',
	className: '',
};

export default Banner;
