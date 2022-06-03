import { createSlice } from '@reduxjs/toolkit';

const initialState = { likedIssues: [] };

export const issueLikesSlice = createSlice({
	name: 'issueLikes',
	initialState,
	reducers: {
		addLikedIssue: (state, action) => {
			state.likedIssues.push(action.payload);
		},
	},
});

export const issueLikesActions = issueLikesSlice.actions;

export default issueLikesSlice.reducer;
