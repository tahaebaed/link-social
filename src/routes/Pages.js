import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Loader from '../components/Loader';
import { SignIn, SignUp } from './lazyLoading';
import ErrorBoundary from '../utilities/ErrorBoundary/ErrorBoundary';
import NotFound from './NotFound';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorBoundary />,
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
		path: '*',
		element: <NotFound />,
	},
]);

export default router;
