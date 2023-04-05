import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Loader from '../components/Loader';
import Layout from '../layout';
import { AUTH_ROUTES, PUBLIC_ROUTES } from './lazyLoading';

const SuspenseWrapper = (props) => {
	return (
		<React.Suspense fallback={<Loader />}>{props.children}</React.Suspense>
	);
};

const routesWrapper = (routes = []) => {};

const ProtectedAuthRoutes = ({ children }) => {
	const user = useSelector((store) => store['auth']['user']);
	if (!user) {
		return <Navigate to='/auth/sign-in' replace />;
	}
	return children;
};

const ProtectedPublicRoutes = ({ children }) => {
	const user = useSelector((store) => store['auth']['user']);
	if (user) {
		return <Navigate to='/' replace />;
	}
	return children;
};

const publicRoutes = PUBLIC_ROUTES.map((route) => (
	<Route
		path={route.path}
		key={route.path}
		element={
			<ProtectedPublicRoutes>
				<route.component />
			</ProtectedPublicRoutes>
		}
	/>
))

const authRoutes = AUTH_ROUTES.map((route) => (
	<Route
		path={route.path}
		key={route.path}
		element={
			<ProtectedAuthRoutes>
				<route.component />
			</ProtectedAuthRoutes>
		}
	/>
))

function MainRoutes() {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo({ top: 0 });
		// scroll to the top of the browser window when changing route
	}, [location]);

	return (
		<SuspenseWrapper>
			<Routes>
				<Route path='/' element={<Layout />}>
					{publicRoutes}
					{authRoutes}
				</Route>
			</Routes>
		</SuspenseWrapper>
	);
}

export default MainRoutes;
