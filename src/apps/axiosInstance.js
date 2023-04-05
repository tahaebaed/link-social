import axios from 'axios';
import Cookies from 'js-cookie';

export const userInterceptor = axios.create({
	baseURL: 'https://link-social.up.railway.app/api/v1',
	headers: {
		'Content-Type': 'application/json',
		Accept: '*/*',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Credentials': 'true',
		'X-Requested-With': 'XMLHttpRequest',
		'X-CSRF-TOKEN': '{{ csrf_token() }}',
	},
});

userInterceptor.interceptors.request.use((config) => {
	config.headers.authorization = `Bearer ${Cookies.get('token')}`;
	return config;
});

userInterceptor.interceptors.response.use((res) => {
	return res;
});
