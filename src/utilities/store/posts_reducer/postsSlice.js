import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userInterceptor } from '../../../apps/axiosInstance';
import { createPostExtra, getReactExtra, postReactExtra } from './postReactsExtraReducer';
export const getPosts = createAsyncThunk('getPosts', async () => {
	try {
		const response = await userInterceptor({
			method: 'GET',
			url: `/posts`
		})
		console.log(response.data.data.posts)
		return response.data.data.posts;
	} catch (err) {
		return err.response.data
	}
})
const initialState = {
	posts: { loading: false, posts: [], error: '', },
	reacts: { loading: false, error: '', reacts: [] },
	createdPost: { loading: false, error: '', posts: [] },

};

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {},
	extraReducers: {
		...postReactExtra(),
		...getReactExtra(),
		...createPostExtra(),
		[getPosts.pending]: (state) => {
			state.posts.loading = true
		},
		[getPosts.fulfilled]: (state, action) => {
			state.posts.loading = false
			state.posts.posts = action.payload
			console.log(state.posts.posts)
		},
		[getPosts.rejected]: (state, action) => {
			state.posts.loading = false
			state.posts.error = action.payload.message
		}
	}
})

export const { updatePostRect } = postsSlice.actions
export default postsSlice.reducer
