import React from 'react';

// Layout
import Registration from '../layout/Registration';

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
const ChatBox = React.lazy(() => import('../pages/needAuth/Chat'));

const Profile = React.lazy(() => import('../pages/needAuth/Profile'));

const PUBLIC_ROUTES = [
	{
		path: '/auth/sign-in',
		component: SignIn,
		layout: Registration,
	},
	{
		path: '/auth/sign-up',
		component: SignUp,
		layout: Registration,
	},
	{
		path: '*',
		component: PageNotFound,
	},
];

const AUTH_ROUTES = [
	{
		path: '/',
		component: Homepage,
	},
	{
		path: '/profile/:profileId',
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
	{
		path: '/chat',
		component: ChatBox,
	},
];

export { AUTH_ROUTES, PUBLIC_ROUTES };
