import { createSlice } from '@reduxjs/toolkit';
import { extraReducers } from './extraReducers';
import * as reducers from './actions';
import Cookies from 'js-cookie';

const initialState = {
	loading: false,
	user: !!Cookies.get('token') || null,
	error: false,
};

const user = createSlice({
	name: 'user',
	initialState,
	reducers,
	extraReducers,
});

export const { loginUser, logOutUser } = user.actions;

export default user.reducer;
