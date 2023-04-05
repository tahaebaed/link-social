import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { userInterceptor } from '../../apps/axiosInstance';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { loginUser } from './user_reducer/userSlice';

const putUpdateUser = createAsyncThunk(
	'setting/put/user',
	async (user, { dispatch }) => {
		try {
			const response = await userInterceptor({
				method: 'put',
				url: `/users/`,
				data: user,
			});
			dispatch(loginUser(response.data.data.user));
			return response.data;
		} catch (err) {
			return { error: err.response, status: false };
		}
	}
);

const setting = createSlice({
	name: 'setting',
	initialState: {
		isLoading: false,
		error: null,
	},
	reducers: {},
	extraReducers: {
		[putUpdateUser.pending]: (state) => {
			state.isLoading = true;
		},
		[putUpdateUser.fulfilled]: (state, action) => {
			state.isLoading = false;

			if (action.payload.status) {
				toast.success(action.payload.message);
				Cookies.set('user', JSON.stringify(action.payload.data.user));
			} else {
				state.error = action.payload.error.data;
				toast.error(action.payload.error.data.message);
			}
		},
		[putUpdateUser.rejected]: (state, action) => {
			state.error = action.payload.error.data;
			toast.error(action.payload.error.data.message);
		},
	},
});

export default setting.reducer;
export { putUpdateUser };
