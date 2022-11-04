import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import userReducer from './user_reducer/userSlice'

const store = configureStore({
  reducer: { userReducer },
  devTools: process.env !== 'production',
})

const ReduxProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
)

export default ReduxProvider
