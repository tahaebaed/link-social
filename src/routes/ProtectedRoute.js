import { Navigate, useLocation } from 'react-router-dom';

import React from 'react';

const ProtectedRoute = ({ user, children }) => {
	const location = useLocation();
	if (!user) {
		return <Navigate to='/login' state={{ from: location }} replace />;
	}
	return children;
};

export default ProtectedRoute;
