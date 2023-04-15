import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { userInterceptor } from '../../apps/axiosInstance';

const getUser = createAsyncThunk('profile/get/user', async (profileId) => {
	try {
		const response = await userInterceptor({
			method: 'get',
			url: `/profiles/${profileId}`,
		});
		return response.data;
	} catch (err) {
		return { error: err.response, status: false };
	}
});

const getUserPosts = createAsyncThunk(
	'profile/get/user/posts',
	async (profileId) => {
		try {
			const response = await userInterceptor({
				method: 'get',
				url: `/posts/user/${profileId}`,
			});
			return response.data;
		} catch (err) {
			return { error: err.response, status: false };
		}
	}
);

const getUserSavedPosts = createAsyncThunk(
	'profile/get/user/posts/saved',
	async () => {
		try {
			const response = await userInterceptor({
				method: 'get',
				url: `/saved-posts`,
			});
			return response.data;
		} catch (err) {
			return { error: err.response, status: false };
		}
	}
);

const getUserImages = createAsyncThunk(
	'profile/get/user/images',
	async (profileId) => {
		try {
			const response = await userInterceptor({
				method: 'get',
				url: `/images/profile/${profileId}`,
			});
			const refactoredImages = response.data.data.images.reduce(
				(prev, current) => ({
					...prev,
					[current.type]: [...prev[current.type], current],
				}),
				{ cover: [], avatar: [] }
			);
			return { ...refactoredImages, status: response.data.status };
		} catch (err) {
			return { error: err.response, status: false };
		}
	}
);

const getUserFollow = createAsyncThunk(
	'profile/get/user/follow',
	async (profileId) => {
		try {
			const followers = await userInterceptor({
				method: 'get',
				url: `/follow/${profileId}/followers`,
			});
			const following = await userInterceptor({
				method: 'get',
				url: `/follow/${profileId}/following`,
			});
			return {
				followers: followers.data.data.followers,
				following: following.data.data.following,
				status: following.data.status,
			};
		} catch (err) {
			return { error: err.response, status: false };
		}
	}
);

const profile = createSlice({
	name: 'profile',
	initialState: {
		about: {
			isLoading: false,
			error: null,
			profile: null,
		},
		posts: {
			isLoading: false,
			error: null,
			posts: [],
		},
		saved: {
			isLoading: false,
			error: null,
			saved: [],
		},
		images: {
			isLoading: false,
			error: null,
			images: { cover: [], avatar: [] },
		},
		follow: {
			isLoading: false,
			error: null,
			followers: [],
			following: [],
		},
	},
	reducers: {},
	extraReducers: {
		[getUser.pending]: (state) => {
			state.about.isLoading = true;
		},
		[getUser.fulfilled]: (state, action) => {
			state.about.isLoading = false;
			if (action.payload.status) {
				state.about.profile = action.payload.data.profile;
			} else {
				state.about.error = action.payload.error.data;
			}
		},
		[getUser.rejected]: (state, action) => {
			state.about.error = action.payload.error.data;
		},
		[getUserSavedPosts.pending]: (state) => {
			state.saved.isLoading = true;
		},
		[getUserSavedPosts.fulfilled]: (state, action) => {
			state.saved.isLoading = false;
			if (action.payload.status) {
				state.saved.saved = action.payload.data.saved_posts;
			} else {
				state.saved.error = action.payload.error.data;
			}
		},
		[getUserSavedPosts.rejected]: (state, action) => {
			state.saved.error = action.payload.error.data;
		},
		[getUserPosts.pending]: (state) => {
			state.posts.isLoading = true;
		},
		[getUserPosts.fulfilled]: (state, action) => {
			state.posts.isLoading = false;
			if (action.payload.status) {
				state.posts.posts = action.payload.data.posts;
			} else {
				state.posts.error = action.payload.error.data;
			}
		},
		[getUserPosts.rejected]: (state, action) => {
			state.posts.error = action.payload.error.data;
		},
		[getUserImages.pending]: (state) => {
			state.images.isLoading = true;
		},
		[getUserImages.fulfilled]: (state, action) => {
			state.images.isLoading = false;
			if (action.payload.status) {
				state.images.images = action.payload;
			} else {
				state.images.error = action.payload.error.data;
			}
		},
		[getUserImages.rejected]: (state, action) => {
			state.images.error = action.payload.error.data;
		},
		[getUserFollow.pending]: (state) => {
			state.follow.isLoading = true;
		},
		[getUserFollow.fulfilled]: (state, action) => {
			state.follow.isLoading = false;
			if (action.payload.status) {
				state.follow.followers = action.payload.followers;
				state.follow.following = action.payload.following;
			} else {
				state.follow.error = action.payload.error.data;
			}
		},
		[getUserFollow.rejected]: (state, action) => {
			state.follow.error = action.payload.error.data;
		},
	},
});

export default profile.reducer;
export {
	getUser,
	getUserPosts,
	getUserFollow,
	getUserImages,
	getUserSavedPosts,
};
