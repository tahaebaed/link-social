import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Loader from '../components/Loader';
import { SignIn, SignUp, UpdateUser } from './lazyLoading';
import ErrorBoundary from '../utilities/ErrorBoundary/ErrorBoundary';
import NotFound from './NotFound';
import ProtectedRoute from './ProtectedRoute';
import Registration from '../layout/Registration';

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
		],
	},

	{
		path: '*',
		element: <NotFound />,
	},
]);

export default router;
