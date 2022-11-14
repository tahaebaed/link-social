import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Loader from '../components/Loader';
import { Profile, SignIn, SignUp } from './lazyLoading';
import ErrorBoundary from '../utilities/ErrorBoundary/ErrorBoundary';
import NotFound from './NotFound';
import Timeline from '../layout/Profile/Timeline';
import About from '../layout/Profile/About';

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
			{
				path: 'profile',
				element: (
					<React.Suspense fallback={<Loader />}>
						<Profile />
					</React.Suspense>
				),
				children: [{
					path: 'timeline',
					element: <Timeline />
				},
				{
					path: 'about',
					element: <About />
				}]
			},
			{
				path: '*',
				element: <NotFound />,
			},
		],
	},

]);

export default router;
