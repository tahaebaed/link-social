import axios from "axios";
import { getData } from "../store/weather_reducer/weatherSlice";
import { store } from "../store/index";

const apiKey = '7d5cda43eea848c2f97ffc62c6997c45b69ddbe28be007ff8cdde2e7';
export const ipInstance = axios.create({
	baseURL: `https://api.ipdata.co?api-key=${apiKey}`
})

ipInstance.interceptors.request.use((req) => {
	return req
});

ipInstance.interceptors.response.use((res) => {
	store.dispatch(getData(res.data.ip))
	return res
});
