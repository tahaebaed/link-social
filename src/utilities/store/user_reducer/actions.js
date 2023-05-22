import Cookies from 'js-cookie';

export const loginUser = (state, action) => {
	state.user = action.payload;
	localStorage.setItem('user', state.user);
};
export const logOutUser = (state) => {
	state.user = null;
	Cookies.remove('user');
	Cookies.remove('token');
};
