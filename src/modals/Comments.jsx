import {
	Alert,
	Avatar,
	Center,
	Loader,
	ScrollArea,
	Textarea,
	Timeline,
} from '@mantine/core';
import { modals } from '@mantine/modals';
import React, { useEffect, useState } from 'react';
import { IoAlertCircleOutline } from 'react-icons/io5';
import { VscCommentDiscussion } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../components/Button';
import { getComment } from '../utilities/store/comments.slice';

function CommentsModal(props) {
	const dispatch = useDispatch();
	const { comments, isLoading, error } = useSelector(
		(store) => store['comments']
	);

	useEffect(() => {
		dispatch(getComment(props.postId));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (isLoading) {
		return (
			<Center h={200}>
				<Loader color='teal' size='xl' variant='dots' />
			</Center>
		);
	} else if (error) {
		return (
			<Alert
				icon={<IoAlertCircleOutline size='1rem' />}
				title='Error!'
				color='red'
			>
				{JSON.stringify(error)}
			</Alert>
		);
	} else if (comments) {
		if (comments.length) {
			return (
				<>
					<ScrollArea h={350} offsetScrollbars>
						<Timeline
							color='teal'
							active={-1}
							lineWidth={3}
							bulletSize={35}
							className='mt-3'
						>
							{comments.map((comment) => (
								<Timeline.Item
									key={comment.id}
									title={comment.user.user_name}
									bulletSize={24}
									bullet={
										<Avatar
											size={35}
											radius='xl'
											src={comment.user.profile.avatar}
										/>
									}
								>
									<div className='text-gray-400'>{comment.body}</div>
								</Timeline.Item>
							))}
						</Timeline>
					</ScrollArea>
					<WriteComment />
				</>
			);
		}

		return (
			<>
				<div className='h-40 flex justify-center items-center text-4xl text-center text-gray-400'>
					<div>
						<VscCommentDiscussion className='inline-block' />
						<p className='text-sm mt-3'>No Comments Found</p>
					</div>
				</div>
				<WriteComment />
			</>
		);
	} else {
		return <>Something goes wrong,</>;
	}
}

const WriteComment = () => {
	const [comment, setComment] = useState('');

	const onFormSubmit = (evt) => {
		evt.preventDefault();

		console.log(comment);
	};

	return (
		<form onSubmit={onFormSubmit}>
			<Textarea
				placeholder='Your comment'
				withAsterisk
				minRows={2}
				maxRows={5}
				value={comment}
				onChange={(evt) => setComment(evt.target.value)}
			/>
			<Button type='submit' className='mt-2' disabled={!comment}>
				Publish
			</Button>
		</form>
	);
};

export default CommentsModal;
