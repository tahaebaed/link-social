import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';
import Loader from '../components/Loader';
import Layout from '../layout';
import { AUTH_ROUTES, PUBLIC_ROUTES } from './lazyLoading';

const SuspenseWrapper = (props) => {
	return (
		<React.Suspense fallback={<Loader />}>{props.children}</React.Suspense>
	);
};

const routesWrapper = (routes = []) => {
	return routes.map((route) => (
		<Route
			key={route.path}
			element={route.layout ? <route.layout /> : <Layout />}
		>
			<Route
				path={route.path}
				element={
					<SuspenseWrapper>
						<route.component />
					</SuspenseWrapper>
				}
			/>
		</Route>
	));
};

function MainRoutes() {
	const location = useLocation();
	const user = useSelector((store) => store['auth']['user']);

	useEffect(() => {
		window.scrollTo({ top: 0 });
		// scroll to the top of the browser window when changing route
	}, [location]);

	return (
		<Routes>
			{routesWrapper(PUBLIC_ROUTES)}
			{user && routesWrapper(AUTH_ROUTES)}
		</Routes>
	);
}

export default MainRoutes;
