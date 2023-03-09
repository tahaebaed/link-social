import axios from "axios";
export const weatherInstance = axios.create({
	baseURL: "http://api.weatherapi.com/v1/"
})
