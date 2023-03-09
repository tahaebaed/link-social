import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import weatherReducer from './weather_reducer/weatherSlice'
import userReducer from './user_reducer/userSlice'

export const store = configureStore({
	reducer: { userReducer, weatherReducer },
	devTools: process.env !== 'production',
})

const ReduxProvider = ({ children }) => (
	<Provider store={store}>{children}</Provider>
)

export default ReduxProvider
