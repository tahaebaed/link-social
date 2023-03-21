import React from 'react';

// No Auth
const Homepage = React.lazy(() => import('../pages/noAuth/Homepage'));
const SignIn = React.lazy(() => import('../pages/noAuth/SignIn'));
const SignUp = React.lazy(() => import('../pages/noAuth/SignUp'));
const PageNotFound = React.lazy(() => import('../pages/noAuth/404'));

// Need Auth
const UpdateUser = React.lazy(() => import('../pages/needAuth/UpdateUser'));
const UpdateProfile = React.lazy(() =>
	import('../pages/needAuth/UpdateProfile')
);
const Profile = React.lazy(() => import('../pages/needAuth/Profile'));

const PUBLIC_ROUTES = [
	{
		path: '/',
		component: Homepage,
	},

	{
		path: '/auth/sign-in',
		component: SignIn,
	},
	{
		path: '/auth/sign-up',
		component: SignUp,
	},
	{
		path: '*',
		component: PageNotFound,
	},
];

const AUTH_ROUTES = [
	{
		path: '/profile',
		component: Profile,
	},
	{
		path: '/setting/update-user',
		component: UpdateUser,
	},
	{
		path: '/setting/update-profile',
		component: UpdateProfile,
	},
];

export { AUTH_ROUTES, PUBLIC_ROUTES };