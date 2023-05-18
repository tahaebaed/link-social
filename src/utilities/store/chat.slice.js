import { createSlice } from '@reduxjs/toolkit';

const chat = createSlice({
	name: 'chat',
	initialState: {
		contact: null,
	},
	reducers: {
		selectContact: (state, action) => {
			state.contact = action.payload;
		},
		unSelectContact: (state) => {
			state.contact = null;
		},
	},
});

export default chat.reducer;
export const { selectContact, unSelectContact } = chat.actions;
