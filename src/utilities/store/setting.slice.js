import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { userInterceptor } from '../../apps/axiosInstance';
import { loginUser } from './user_reducer/userSlice';

const getUser = createAsyncThunk('setting/get/user', async () => {
	try {
		const profileId = JSON.parse(Cookies.get('user') || '{}')?.id;
		const response = await userInterceptor({
			method: 'get',
			url: `/users/${profileId}`,
		});
		return response.data;
	} catch (err) {
		return { error: err.response, status: false };
	}
});

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

const putUpdateProfile = createAsyncThunk(
	'setting/put/profile',
	async (profile, { dispatch }) => {
		try {
			const response = await userInterceptor({
				method: 'put',
				url: `/profiles/`,
				data: profile,
				headers: {
					'Content-Type': 'multipart/form-data',
				},
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
		user: null,
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
				state.user = action.payload.data.user;
			} else {
				state.error = action.payload.error.data;
				toast.error(action.payload.error.data.message);
			}
		},
		[putUpdateUser.rejected]: (state, action) => {
			state.error = action.payload.error.data;
			toast.error(action.payload.error.data.message);
		},
		[putUpdateProfile.pending]: (state) => {
			state.isLoading = true;
		},
		[putUpdateProfile.fulfilled]: (state, action) => {
			state.isLoading = false;

			if (action.payload.status) {
				toast.success(action.payload.message);
				Cookies.set('user', JSON.stringify(action.payload.data.user));
				state.user = action.payload.data.user;
			} else {
				state.error = action.payload.error.data;
				toast.error(action.payload.error.data.message);
			}
		},
		[putUpdateProfile.rejected]: (state, action) => {
			state.error = action.payload.error.data;
			toast.error(action.payload.error.data.message);
		},
		[getUser.pending]: (state) => {
			state.isLoading = true;
		},
		[getUser.fulfilled]: (state, action) => {
			state.isLoading = false;

			if (action.payload.status) {
				state.user = action.payload.data.user;
			} else {
				state.error = action.payload.error.data;
				toast.error(action.payload.error.data.message);
			}
		},
		[getUser.rejected]: (state, action) => {
			state.error = action.payload.error.data;
			toast.error(action.payload.error.data.message);
		},
	},
});

export default setting.reducer;
export { putUpdateUser, putUpdateProfile, getUser };
