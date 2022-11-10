import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';

import ReduxProvider from './utilities/store';
import './index.scss';
import ErrorBoundary from './utilities/ErrorBoundary/ErrorBoundary';
import router from './routes/Pages';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ErrorBoundary>
			<ReduxProvider>
				<RouterProvider router={router} />
			</ReduxProvider>
		</ErrorBoundary>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
