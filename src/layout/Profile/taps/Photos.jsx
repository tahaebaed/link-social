import React, { useEffect } from 'react';
import { BsImage, BsPersonBoundingBox } from 'react-icons/bs';
import { FiDownload } from 'react-icons/fi';
import { getUserImages } from '../../../utilities/store/profile.slice';
import { profileSelector } from '../../../utilities/store';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ImagesList = ({ images = [] }) => {
	return (
		<div className='grid md:grid-cols-2'>
			{images.map((img, index) => (
				<div className='col-span-1 m-3' key={index}>
					<div className='relative'>
						<a
							href={img.path}
							className='flex justify-center items-center bg-gray-100 absolute left-0 bottom-0 p-2 text-lg m-2 rounded-full hover:shadow-md  hover:bg-slate-200 transition-all duration-200'
							download
							target='_blank'
							rel='noreferrer'
						>
							<FiDownload />
						</a>
						<img
							src={img.path}
							alt={`${img.type - img.created_at}`}
							className='max-w-full rounded-md shadow-[0_8px_30px_rgba(0,_0,_0,_0.05)]'
						/>
					</div>
				</div>
			))}
		</div>
	);
};

function Photos() {
	const dispatch = useDispatch();
	const params = useParams();
	const { isLoading, error, images } = useSelector(profileSelector.images);

	useEffect(() => {
		dispatch(getUserImages(params?.profileId));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (isLoading) {
		return <>Loading...</>;
	} else if (error) {
		return <pre>{JSON.stringify(error)}</pre>;
	} else if (images) {
		return (
			<div className='md:grid grid-cols-2 mt-4'>
				<div className='col-span-1'>
					<div className='p-4 mr-1 shadow-[0_8px_30px_rgba(0,_0,_0,_0.05)] '>
						<h4 className='first-letter:text-4xl first-letter:text-aurora text-xl font-bold'>
							Avatar:
						</h4>
						<div className='mt-5'>
							{images.avatar.length ? (
								<ImagesList images={images.avatar} />
							) : (
								<div className='h-40 flex justify-center items-center text-4xl text-center text-gray-400'>
									<div>
										<BsPersonBoundingBox className='inline-block' />
										<p className='text-sm mt-3'>No Avatars Found</p>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
				<div className='col-span-1'>
					<div className='p-4 ml-1 shadow-[0_8px_30px_rgba(0,_0,_0,_0.05)] '>
						<h4 className='first-letter:text-4xl first-letter:text-aurora text-xl font-bold'>
							Cover:
						</h4>
						<div className='mt-5'>
							{images.cover.length ? (
								<ImagesList images={images.cover} />
							) : (
								<div className='h-40 flex justify-center items-center text-4xl text-center text-gray-400'>
									<div>
										<BsImage className='inline-block' />
										<p className='text-sm mt-3'>No Covers Found</p>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return <>no images found</>;
	}
}

export default Photos;
