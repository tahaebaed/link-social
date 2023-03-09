import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { weatherInstance } from "../../weatherCard/WeatherInstance";

export const getData = createAsyncThunk('getData', async (payload) => {
	return await weatherInstance.get(
		`forecast.json?key=2abfec7503be4283914185104230803&q=${payload}&days=5`
	).then(res => {
		return res.data
	})
})
const weatherSlice = createSlice({
	initialState: {
		loading: false,
		error: '',
		weatherData: {}
	},
	name: 'weather',
	extraReducers: {
		[getData.pending]: (state) => {
			state.loading = true

		},
		[getData.fulfilled]: (state, payload) => {
			state.loading = false
			state.weatherData = payload.payload
		},
		[getData.error]: (state) => {
			state.loading = false
			state.error = 'somthing went wrong 😒'

		},
	}
})
export default weatherSlice.reducer
