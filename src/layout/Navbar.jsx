import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
	<div>
		Navbar
		<Link to='/registration/SignIn'>Sign In</Link>
		<Link to='/registration/SignUp'>Sign Up</Link>
	</div>
);

export default Navbar;
