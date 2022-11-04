export const loginUser = (state, action) => {
  state.user = action.payload
  localStorage.setItem('user', state.user)
}
export const logOutUser = state => {
  state.user = null
  localStorage.removeItem('user')
}
