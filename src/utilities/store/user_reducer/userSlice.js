import { createSlice } from '@reduxjs/toolkit';
import { extraReducers } from './extraReducers';
import * as reducers from './actions';
import Cookies from 'js-cookie';

const userFromToken = JSON.parse(Cookies.get('user') || null);

const initialState = {
	loading: false,
	user: userFromToken,
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
