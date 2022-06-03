import { createSlice } from '@reduxjs/toolkit';

const initialState = { issuesList: [] };

export const githubIssuesSlice = createSlice({
	name: 'githubIssues',
	initialState,
	reducers: {
		setGitHubIssues: (state, action) => {
			state.issuesList = action.payload;
		},
		addGivenGitHubIssue: (state, action) => {
			state.issuesList.push(action.payload);
		},
		resetGitHubIssues: (state) => {
			state.issuesList = [];
		},
	},
});

export const githubIssuesActions = githubIssuesSlice.actions;

export default githubIssuesSlice.reducer;
