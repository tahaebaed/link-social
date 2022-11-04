import { createSlice } from '@reduxjs/toolkit'
import { extraReducers } from './extraReducers'
import * as reducers from './actions'

const initialState = {
  loading: false,
  user: localStorage.getItem('user') || null,
  error: false,
}

const user = createSlice({
  name: 'user',
  initialState,
  reducers,
  extraReducers,
})

export const { loginUser, logOutUser } = user.actions

export default user.reducer
