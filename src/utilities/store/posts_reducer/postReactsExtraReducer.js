import { createAsyncThunk } from '@reduxjs/toolkit';
import { userInterceptor } from '../../../apps/axiosInstance';
import { toast } from 'react-toastify';

export const createPosts = createAsyncThunk('createPosts', async (data) => {
	try {
		console.log(data)
		const response = await userInterceptor({
			method: 'POST',
			url: `/posts`,
			headers: {
				'Content-Type': 'multipart/form-data;'
			},
			data
		});

		return response.data.data.post;
	} catch (err) {
		return { error: err.response, status: false };
	}
});
export const sharePosts = createAsyncThunk('sharePosts', async (postId) => {
	try {
		const response = await userInterceptor({
			method: 'POST',
			url: `/posts/${postId}/share`,
		});
		console.log(response, "sharePosts");
		return response.data;
	} catch (err) {
		return { error: err.response, status: false };
	}
});
const getReacts = createAsyncThunk('getReacts', async (postId) => {
	try {
		const response = await userInterceptor({
			method: 'GET',
			url: `/reacts/post/${postId}`,
		});
		console.log(response.data.data.reacts);
		return response.data.data.reacts;
	} catch (err) {
		return { error: err.response, status: false };
	}
});
export const postReacts = createAsyncThunk('postReacts', async (postId) => {
	try {
		const response = await userInterceptor({
			method: 'POST',
			url: `/reacts/post/${postId}`,
		});
		return { reacts: response.data.data.reacts, postId };
	} catch (err) {
		return { error: err.response, status: false };
	}
});
function postReactExtra() {
	return {
		[postReacts.pending]: (state) => {
			state.reacts.loading = true;
		},
		[postReacts.fulfilled]: (state, action) => {
			state.reacts.loading = false;
			state.posts.posts = state.posts.posts.map((post) =>
				post.id === action.payload.postId
					? {
						...post,
						is_react: !post.is_react,
						reacts_count: action.payload.reacts.length,
					}
					: post
			);
		},
		[postReacts.rejected]: (state, action) => {
			state.reacts.loading = false;
			state.reacts.error = action.payload.message;
		},
	};
}
function getReactExtra() {
	return {
		[getReacts.pending]: (state) => {
			state.reacts.loading = true;
		},
		[getReacts.fulfilled]: (state, action) => {
			state.reacts.loading = false;
			state.reacts.reacts = action.payload;
		},
		[getReacts.rejected]: (state, action) => {
			state.reacts.loading = false;
			state.reacts.error = action.payload.message;
		},
	};
}

function createPostExtra() {
	return {
		[createPosts.pending]: (state) => {
			state.createdPost.loading = true;
		},
		[createPosts.fulfilled]: (state, action) => {
			console.log(action.payload, "payload")
			state.createdPost.posts = action.payload;
		},
		[createPosts.rejected]: (state, action) => {
			state.createdPost.error = action.payload.message;
		},
	};
}

function sharePostExtra() {
	return {
		[sharePosts.pending]: (state) => {
			state.sharePost.isLoading = true;
		},
		[sharePosts.fulfilled]: (state, action) => {
			console.log(action.payload, "payload")
			if (!action.payload.status) {
				toast.error(
					<>
						<h4>Something went wrong</h4>
						<p> {action.payload.message}</p>
					</>
				);
			} else {
				toast.success("The post has been shared");
				state.posts.posts = state.posts.posts.map((post) =>
					post.id === action.payload.data.post.post_id
						? {
							...post,
							children_count: post.children_count + 1,

						}
						: post
				);
			}

		},
		[sharePosts.rejected]: (state, action) => {
			state.sharePost.error = action.payload.message;
		},
	};
}

export { getReacts, postReactExtra, getReactExtra, createPostExtra, sharePostExtra };
