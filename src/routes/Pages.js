import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Loader from '../components/Loader';
import Registration from '../layout/Registration';
import ErrorBoundary from '../utilities/ErrorBoundary/ErrorBoundary';
import NotFound from './NotFound';
import ProtectedRoute from './ProtectedRoute';
import {
	Profile,
	SignIn,
	SignUp,
	UpdateProfile,
	UpdateUser,
} from './lazyLoading';

import About from '../layout/Profile/About';
import Timeline from '../layout/Profile/Timeline';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorBoundary />,
		children: [
			{
				path: 'registration',
				element: <Registration />,
				children: [
					{
						path: 'SignIn',
						element: (
							<React.Suspense fallback={<Loader />}>
								<SignIn />
							</React.Suspense>
						),
					},
					{
						path: 'SignUp',
						element: (
							<React.Suspense fallback={<Loader />}>
								<SignUp />
							</React.Suspense>
						),
					},
				],
			},
			{
				path: 'profileId=:profileId',
				children: [
					{
						path: 'updateUser',
						element: (
							<React.Suspense fallback={<Loader />}>
								<ProtectedRoute>
									<UpdateUser />
								</ProtectedRoute>
							</React.Suspense>
						),
					},
				],
			},
			{
				path: 'profile',
				element: (
					<React.Suspense fallback={<Loader />}>
						<Profile />
					</React.Suspense>
				),
				children: [
					{
						path: 'timeline',
						element: <Timeline />,
					},
					{
						path: 'about',
						element: <About />,
					},
				],
			},
			{
				path: 'profileId=:profileId',
				children: [
					{
						path: 'updateUser',
						element: (
							<React.Suspense fallback={<Loader />}>
								<ProtectedRoute>
									<UpdateUser />
								</ProtectedRoute>
							</React.Suspense>
						),
					},
				],
			},
			{
				path: 'profile',
				element: (
					<React.Suspense fallback={<Loader />}>
						<Profile />
					</React.Suspense>
				),
				children: [
					{
						path: 'timeline',
						element: <Timeline />,
					},
					{
						path: 'about',
						element: <About />,
					},
				],
			},
			{
				path: 'setting/update-profile',
				element: (
					<React.Suspense fallback={<Loader />}>
						<UpdateProfile />
					</React.Suspense>
				),
			},
			{
				path: '*',
				element: <NotFound />,
			},
		],
	},
	{
		path: '*',
		element: <NotFound />,
	},
]);

export default router;
