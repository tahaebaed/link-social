import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userInterceptor } from '../../../apps/axiosInstance';
import {
	createPostExtra,
	getReactExtra,
	postReactExtra,
	sharePostExtra,
} from './postReactsExtraReducer';
export const getPosts = createAsyncThunk('getPosts', async (num) => {
	try {
		const response = await userInterceptor({
			method: 'GET',
			url: `/posts?page=${num}`,
		});
		console.log(response.data.data.posts, 'posts');
		return response.data.data.posts;
	} catch (err) {
		return err.response.data;
	}
});
const initialState = {
	posts: {
		loading: false,
		loadMore: false,
		currPage: 1,
		posts: [],
		error: '',
		hasMore: true,
	},
	reacts: { loading: false, error: '', reacts: [] },
	createdPost: { loading: false, error: '', post: {} },
	sharePost: { isLoading: false, error: '', sharedPosts: {} },
};

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		updatePostCommentNumber: (state, action) => {
			state.posts.posts = state.posts.posts.map((post) =>
				post.id === action.payload.postId
					? {
							...post,
							comments_count: action.payload.comments,
					  }
					: post
			);
		},
	},
	extraReducers: {
		...postReactExtra(),
		...getReactExtra(),
		...createPostExtra(),
		...sharePostExtra(),
		[getPosts.pending]: (state) => {
			if (state.posts.currPage === 1) {
				state.posts.loading = true;
			} else {
				state.posts.loadMore = true;
			}
		},
		[getPosts.fulfilled]: (state, action) => {
			if (state.posts.currPage === 1) {
				state.posts.loading = false;
			} else {
				state.posts.loadMore = false;
			}

			state.posts.posts = [...state.posts.posts, ...action.payload.data];
			state.posts.hasMore =
				action.payload.current_page !== action.payload.last_page;
			state.posts.currPage = action.payload.current_page + 1;
		},
		[getPosts.rejected]: (state, action) => {
			state.posts.loading = false;
			state.posts.error = action.payload.message;
		},
	},
});

export const { updatePostRect, updatePostCommentNumber } = postsSlice.actions;
export default postsSlice.reducer;
