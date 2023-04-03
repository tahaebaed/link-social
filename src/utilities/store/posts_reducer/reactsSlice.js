import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userInterceptor } from '../../../apps/axiosInstance';

export const getReacts = createAsyncThunk('getReacts', async (postId) => {
	try {
		const response = await userInterceptor({
			method: 'GET',
			url: `/reacts/post/${postId}`
		})
		return response.data.data.reacts
	} catch (err) {
		return { error: err.response, status: false }
	}
})
const initialState = {
	loading: false,
	reacts: [],
	error: '',
}
const reactSlice = createSlice({
	name: 'reacts',
	initialState,
	extraReducers: {
		[getReacts.pending]: (state) => {
			state.loading = true
		},
		[getReacts.fulfilled]: (state, action) => {
			state.loading = false
			state.reacts = action.payload
		},
		[getReacts.error]: (state, action) => {
			state.loading = false
			state.error = action.payload.message
		}
	}
})
export default reactSlice.reducer;
