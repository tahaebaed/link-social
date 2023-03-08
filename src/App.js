import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './layout/Navbar.jsx';
function App() {
  return <div className=''>
		<Navbar />
		<Outlet />
	</div>
}

export default App;
