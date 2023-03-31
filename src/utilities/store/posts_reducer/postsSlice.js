import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userInterceptor } from '../../../apps/axiosInstance';
export const getPosts = createAsyncThunk('getPosts', async (payload) => {
	try {
		const response = await userInterceptor.request({
			method: 'GET',
			url: '/posts'
		})
		return response.data.data.posts;
	} catch (err) {
		return err.response.data
	}
})
const initialState = {
	loading: false,
	posts: [],
	error: false,
};

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	extraReducers: {
		[getPosts.pending]: (state) => {
			state.loading = true
		},
		[getPosts.fulfilled]: (state, action) => {
			state.loading = false
			state.posts = action.payload
		},
		[getPosts.error]: (state, action) => {
			state.loading = false
			state.error = action.payload.message
		}
	}
})

export default postsSlice.reducer
