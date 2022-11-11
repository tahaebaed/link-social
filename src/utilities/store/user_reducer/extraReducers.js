import { createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { userInterceptor } from '../../interceptors/axios_instance';

export const fetchUser = createAsyncThunk('user/fetchUser', async (user) => {
	try {
		const response = await userInterceptor({
			method: 'post',
			data: user,
			url: 'api/v1/auth/register',
		});
		console.log(response);
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
			state.error = `${
				action.payload.errors.email ? action.payload.errors.email[0] : ''
			} ${
				action.payload.errors.password ? action.payload.errors.password[0] : ''
			}`;
			toast.error(
				<>
					<h4>{action.payload.message}</h4>
					<p> {state.error}</p>
				</>
			);
		} else {
			toast.success(action.payload.message);
			state.user = action.payload.data.user;
			Cookies.set('token', action.payload.data.token);
		}
	},
	[fetchUser.rejected]: (state, action) => {
		state.error = "couldn't fetch data";
		console.log(action);
	},
};
