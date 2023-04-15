import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import { Provider } from 'react-redux';
import profileReducer from './profile.slice';
import userReducer from './user_reducer/userSlice';
import weatherReducer from './weather_reducer/weatherSlice';
import postsReducer from './posts_reducer/postsSlice';
import settingReducer from './setting.slice';

export const store = configureStore({
	reducer: {
		auth: userReducer,
		weatherReducer,
		postsReducer,
		profile: profileReducer,
		setting: settingReducer,
	},

	devTools: process.env.toString() !== 'production',
});

const ReduxProvider = ({ children }) => (
	<Provider store={store}>{children}</Provider>
);

const profileSelector = {
	about: (state) => state.profile.about,
	follow: (state) => state.profile.follow,
	images: (state) => state.profile.images,
	posts: (state) => state.profile.posts,
	saved: (state) => state.profile.saved,
};

export default ReduxProvider;
export { profileSelector };
