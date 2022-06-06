import { createSlice } from '@reduxjs/toolkit';

const initialState = { issuesList: [], repo: 'react', owner: 'facebook', filter: '' };

export const githubIssuesSlice = createSlice({
	name: 'githubIssues',
	initialState,
	reducers: {
		setGitHubIssues: (state, action) => {
			state.issuesList = action.payload;
		},
		addGivenGitHubIssue: (state, action) => {
			state.issuesList.push(...action.payload);
		},
		resetGitHubIssues: (state) => {
			state.issuesList = [];
		},
		setOwner: (state, action) => {
			state.owner = action.payload;
		},
		setRepoName: (state, action) => {
			state.repo = action.payload;
		},
		setFilter: (state, action) => {
			state.filter = action.payload;
		},
		resetAll: (state) => {
			state.issuesList = [];
			state.repo = '';
			state.owner = '';
			state.filter = '';
		}
	},
});

export const githubIssuesActions = githubIssuesSlice.actions;

export default githubIssuesSlice.reducer;
