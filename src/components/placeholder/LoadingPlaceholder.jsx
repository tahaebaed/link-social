import React from 'react';
import '../../assets/scss/components/placeholder.scss';
import Block from './Block';
function LoadingPlaceholder({
	blocksSizes = [
		{ className: 'w-[400px]' },
		{ sm: true },
		{ sm: true },
		{ lg: true },
		{ sm: true },
		{ sm: true },
		{ sm: true },
		{ lg: true },
		{ sm: true },
	],
}) {
	return (
		<>
			<div className={`placeholder_card`}>
				<div className='flex items-center'>
					<Block rounded />
					<div className={`author_name ml-5`}>
						<Block className='w-[4rem]' />
					</div>
				</div>
				<div className='content_hover my-8'>
					<div className='flex flex-wrap'>
						{blocksSizes.map((size, i) => (
							<Block
								key={i}
								sm={size.sm}
								lg={size.lg}
								className={size.className}
							/>
						))}
					</div>
				</div>
				<div className={`btn_hover mb-6 w-[120px]`}></div>
			</div>
		</>
	);
}

export default LoadingPlaceholder;
