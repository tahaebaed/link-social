import { Navigate } from 'react-router-dom';

import React from 'react';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
	const user = useSelector((store) => store.userReducer.user);
	if (!user) {
		return <Navigate to='/registration/SignIn' replace={true} />;
	}
	return children;
};

export default ProtectedRoute;
