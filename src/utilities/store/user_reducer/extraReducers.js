import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  const response = await fetch('https://dummyjson.com/users/1')
  const data = await response.json()

  return data
})

export const extraReducers = {
  [fetchUser.pending]: state => {
    state.loading = true
  },
  [fetchUser.fulfilled]: (state, action) => {
    state.loading = false
    state.user = action.payload
  },
  [fetchUser.rejected]: state => {
    state.error = "couldn't fetch data"
  },
}
