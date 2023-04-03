import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userInterceptor } from '../../../apps/axiosInstance';
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
	loading: false,
	posts: [],
	error: '',
};

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		updatePostRect: (state, action) => {
			console.log(action.payload, "payload")
			state.posts = state.posts.map((post) => post.id === action.payload.postId ? { ...post, is_react: !post.is_react, reacts_count: action.payload.reactsCount } : post)


		}
	},
	extraReducers: {
		[getPosts.pending]: (state) => {
			state.loading = true
		},
		[getPosts.fulfilled]: (state, action) => {
			state.loading = false
			state.posts = action.payload
			console.log(state.posts)
		},
		[getPosts.error]: (state, action) => {
			state.loading = false
			state.error = action.payload.message
		}
	}
})

export const { updatePostRect } = postsSlice.actions
export default postsSlice.reducer
