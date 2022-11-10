import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ErrorBoundary from '../utilities/ErrorBoundary/ErrorBoundary';
import { SignIn } from './lazyLoading';
import NotFound from './NotFound';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <NotFound />,
		hasErrorBoundary: <ErrorBoundary />,
		children: [
			{
				path: 'SignIn',
				element: (
					<React.Suspense fallback={<p>loading</p>}>
						<SignIn />
					</React.Suspense>
				),
			},
		],
	},
]);

export default router;
