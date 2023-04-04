import { createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { userInterceptor } from '../../../apps/axiosInstance';

export const fetchUser = createAsyncThunk('user/fetchUser', async (user) => {
	try {
		const response = await userInterceptor({
			method: 'post',
			data: user,
			url: '/auth/register',
		});
		return response.data;
	} catch (err) {
		return err.response.data;
	}
});

export const login = createAsyncThunk('user/login', async (user) => {
	try {
		const response = await userInterceptor({
			method: 'post',
			data: user,
			url: '/auth/login',
		});
		return response.data;
	} catch (err) {
		return err.response.data;
	}
});

export const updateUser = createAsyncThunk('user/updateUser', async (user) => {
	try {
		const response = await userInterceptor({
			method: 'put',
			data: user,
			url: '/users',
		});
		return response.data;
	} catch (err) {
		return err.response.data;
	}
});

export const extraReducers = {
	[fetchUser.pending]: (state) => {
		state.loading = true;
	},
	[fetchUser.fulfilled]: (state, action) => {
		state.loading = false;

		if (!action.payload.status) {
			toast.error(
				<>
					<h4>Something went wrong</h4>
					<p> {action.payload.message}</p>
				</>
			);
		} else {
			toast.success(action.payload.message);
			state.user = action.payload.data.user;
			Cookies.set('token', action.payload.data.token);
			Cookies.set('user', JSON.stringify(state.user));
		}
	},
	[fetchUser.rejected]: (state, action) => {
		state.error = "couldn't fetch data";
	},
	[login.pending]: (state) => {
		state.loading = true;
	},
	[login.fulfilled]: (state, action) => {
		state.loading = false;

		if (!action.payload.status) {
			toast.error(
				<>
					<h4>Something Went wrong</h4>
					<p> {action.payload.error}</p>
				</>
			);
		} else {
			toast.success(action.payload.message);
			state.user = action.payload.data.user;
			Cookies.set('token', action.payload.data.token);
			Cookies.set('user', JSON.stringify(state.user));
		}
	},
	[login.rejected]: (state, action) => {
		state.error = "couldn't fetch data";
	},
	[updateUser.pending]: (state) => {
		state.loading = true;
	},
	[updateUser.fulfilled]: (state, action) => {},
};
