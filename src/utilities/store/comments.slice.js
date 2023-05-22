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

const createComment = createAsyncThunk(
	'create/comment',
	async ({ postId, body }) => {
		try {
			const response = await userInterceptor({
				method: 'post',
				url: `/comments/${postId}`,
				data: { body },
			});
			return response.data;
		} catch (err) {
			return { error: err.response, status: false };
		}
	}
);

const comments = createSlice({
	name: 'comment',
	initialState: {
		retrieve: { isLoading: false, error: null, comments: null },
		create: {
			isLoading: false,
			error: null,
			comment: null,
		},
	},
	reducers: {},
	extraReducers: {
		[getComment.pending]: (state) => {
			state.retrieve.isLoading = true;
		},
		[getComment.fulfilled]: (state, action) => {
			state.retrieve.isLoading = false;

			if (action.payload.status) {
				state.retrieve.comments = action.payload.data.comments;
			} else {
				state.retrieve.error = action.payload.error.data;
				toast.error(action.payload.error.data.message);
			}
		},
		[getComment.rejected]: (state, action) => {
			state.retrieve.error = action.payload.error.data;
			toast.error(action.payload.error.data.message);
		},
		[createComment.pending]: (state) => {
			state.create.isLoading = true;
		},
		[createComment.fulfilled]: (state, action) => {
			state.create.isLoading = false;

			if (action.payload.status) {
				state.retrieve.comments = [
					...state.retrieve.comments,
					action.payload.data.comment,
				];
				state.create.comment = action.payload.data.comment;
			} else {
				state.create.error = action.payload.error.data;
				toast.error(action.payload.error.data.message);
			}
		},
		[createComment.rejected]: (state, action) => {
			state.create.error = action.payload.error.data;
			toast.error(action.payload.error.data.message);
		},
	},
});

export default comments.reducer;
export { getComment, createComment };
