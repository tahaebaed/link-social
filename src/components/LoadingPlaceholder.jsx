import React from 'react';

function LoadingPlaceholder({
	imgWidth,
	imgheight,
	carWidth,
	cardHeight,
	authorWidth,
	authorHeight,
	bigBlockWidth,
	smallBlockWidth,
	btnWidth,
}) {
	return (
		<>
			<div className={`placeholder_card ${carWidth} ${cardHeight}`}>
				<div className='flex items-center'>
					<div className={`img_hover ${imgWidth} ${imgheight}`}></div>
					<div
						className={`author_name ml-5 ${authorWidth} ${authorHeight}`}
					></div>
				</div>
				<div className='content_hover my-8'>
					<div className='flex'>
						<p className={`big_block my-3 mx-2 ${bigBlockWidth}`}></p>
						<p className={`small_block my-3 mx-2 ${smallBlockWidth}`}></p>
						<p className={`big_block my-3 mx-2 ${bigBlockWidth}`}></p>
						<p className={`small_block my-3 mx-2 ${smallBlockWidth}`}></p>
					</div>
					<div className='flex'>
						<p className={`small_block my-3 mx-2 ${smallBlockWidth}`}></p>
						<p className={`small_block my-3 mx-2 ${smallBlockWidth}`}></p>
						<p className={`big_block my-3 mx-2 ${bigBlockWidth}`}></p>
						<p className={`small_block my-3 mx-2 ${smallBlockWidth}`}></p>
					</div>
					<div className='flex'>
						<p className={`small_block my-3 mx-2 ${smallBlockWidth}`}></p>
					</div>
				</div>
				<div className={`btn_hover mb-6 ${btnWidth}`}></div>
			</div>
		</>
	);
}

export default LoadingPlaceholder;
