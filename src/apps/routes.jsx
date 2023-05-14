import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Loader from '../components/Loader';
import Layout from '../layout/Base';
import { AUTH_ROUTES, PUBLIC_ROUTES } from './lazyLoading';

const SuspenseWrapper = (props) => {
	return (
		<React.Suspense fallback={<Loader />}>{props.children}</React.Suspense>
	);
};

const ProtectedPublicRoutes = ({ children }) => {
	const user = useSelector((store) => store.auth.user);
	const token = useSelector((store) => store.auth.token);
	console.log(token, user);

	return children;
};

const publicRoutes = PUBLIC_ROUTES.map((route) => (
	<Route
		key={route.path}
		element={route.layout ? <route.layout /> : <Layout />}
	>
		<Route
			path={route.path}
			element={
				<ProtectedPublicRoutes>
					<route.component />
				</ProtectedPublicRoutes>
			}
		/>
	</Route>
));

const authRoutes = AUTH_ROUTES.map((route) => (
	<Route
		key={route.path}
		element={route.layout ? <route.layout /> : <Layout />}
	>
		<Route path={route.path} element={<route.component />} />
	</Route>
));

function MainRoutes() {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo({ top: 0 });
		// scroll to the top of the browser window when changing route
	}, [location]);

	return (
		<SuspenseWrapper>
			<Routes>
				<Route path='/'>
					{publicRoutes}
					{authRoutes}
				</Route>
			</Routes>
		</SuspenseWrapper>
	);
}

export default MainRoutes;
