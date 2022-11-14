import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
	<div>
		Navbar
		<Link to='/SignIn'>Sign In</Link>
		<Link to='/SignUp'>Sign Up</Link>
		<Link to='/profile'>profile</Link>
	</div>
);

export default Navbar;
