import axios from 'axios';
import Cookies from 'js-cookie';

export const userInterceptor = axios.create({
	baseURL: 'https://link-social.up.railway.app/',
	headers: {
		'Content-Type': 'application/json',
		Accept: '*/*',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Credentials': 'true',
		'X-Requested-With': 'XMLHttpRequest',
		'X-CSRF-TOKEN': document.head
			.querySelector('meta[name="csrf-token"]')
			.getAttribute('content'),
	},
});

userInterceptor.interceptors.request.use((req) => {
	console.log(req);

	return req;
});
userInterceptor.interceptors.response.use((res) => {
	console.log(res);

	return res;
});
