import React from 'react';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './layout/Navbar.jsx';
import { ipInstance } from './utilities/weatherCard/ipInstance';


function App() {
	useEffect(() => {
		ipInstance.get("")
	}, [])
	return (
		<div className='App'>
			<Navbar />
			<Outlet />
		</div>
	);
function App() {
  return <div className=''>
		<Navbar />
		<Outlet />
	</div>
}
}

export default App;
