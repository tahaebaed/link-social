import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { userInterceptor } from '../../apps/axiosInstance';

const toggleFollowUser = createAsyncThunk('follow/user', async (postId) => {
	try {
		const response = await userInterceptor({
			method: 'post',
			url: `/follow/${postId}`,
		});
		return response.data;
	} catch (err) {
		return { error: err.response, status: false };
	}
});

const showFollowUser = createAsyncThunk('show/follow/user', async (postId) => {
	try {
		const response = await userInterceptor({
			method: 'get',
			url: `/follow/${postId}`,
		});
		return response.data;
	} catch (err) {
		return { error: err.response, status: false };
	}
});

const follow = createSlice({
	name: 'follow',
	initialState: {
		isLoading: false,
		error: null,
		following: null,
	},
	reducers: {},
	extraReducers: {
		[toggleFollowUser.pending]: (state) => {
			state.isLoading = true;
		},
		[toggleFollowUser.fulfilled]: (state, action) => {
			state.isLoading = false;

			if (action.payload.status) {
				state.following = action.payload.data.following;
			} else {
				state.error = action.payload.error.data;
				toast.error(action.payload.error.data.message);
			}
		},
		[toggleFollowUser.rejected]: (state, action) => {
			state.error = action.payload.error.data;
			toast.error(action.payload.error.data.message);
		},
		[showFollowUser.pending]: (state) => {
			state.isLoading = true;
		},
		[showFollowUser.fulfilled]: (state, action) => {
			state.isLoading = false;

			if (action.payload.status) {
				state.following = action.payload.data.following;
			} else {
				state.error = action.payload.error.data;
				toast.error(action.payload.error.data.message);
			}
		},
		[showFollowUser.rejected]: (state, action) => {
			state.error = action.payload.error.data;
			toast.error(action.payload.error.data.message);
		},
	},
});

export default follow.reducer;
export { toggleFollowUser, showFollowUser };
