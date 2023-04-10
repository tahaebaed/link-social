import { createAsyncThunk } from '@reduxjs/toolkit';
import { userInterceptor } from '../../../apps/axiosInstance';

export const createPosts = createAsyncThunk('createPosts', async (bodyText) => {
	try {
		const response = await userInterceptor({
			method: 'POST',
			url: `/posts`,
			data: {
				body: bodyText
			}
		});
		console.log(response, "create res");
		return response.data.data.post;
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
		console.log(response.data.data.reacts);
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

export { getReacts, postReactExtra, getReactExtra, createPostExtra };
