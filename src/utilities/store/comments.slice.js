import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { userInterceptor } from '../../apps/axiosInstance';

const getComment = createAsyncThunk('get/comment', async (postId) => {
	try {
		const response = await userInterceptor({
			method: 'get',
			url: `/comments/post/${postId}`,
		});
		return response.data;
	} catch (err) {
		return { error: err.response, status: false };
	}
});

const comments = createSlice({
	name: 'comment',
	initialState: {
		isLoading: false,
		error: null,
		comments: null,
	},
	reducers: {},
	extraReducers: {
		[getComment.pending]: (state) => {
			state.isLoading = true;
		},
		[getComment.fulfilled]: (state, action) => {
			state.isLoading = false;

			if (action.payload.status) {
				state.comments = action.payload.data.comments;
			} else {
				state.error = action.payload.error.data;
				toast.error(action.payload.error.data.message);
			}
		},
		[getComment.rejected]: (state, action) => {
			state.error = action.payload.error.data;
			toast.error(action.payload.error.data.message);
		},
	},
});

export default comments.reducer;
export { getComment };
