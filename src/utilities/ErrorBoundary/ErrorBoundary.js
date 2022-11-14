import { useRouteError } from 'react-router-dom';

function ErrorBoundary() {
	let error = useRouteError();
	return (
		<div>
			<h1>Uh oh, something went terribly wrong 😩</h1>
			<pre>{error.message || JSON.stringify(error)}</pre>
			<button onClick={() => window.location.reload()}>
				Click here to reload the app
			</button>
		</div>
	);
}

export default ErrorBoundary;
