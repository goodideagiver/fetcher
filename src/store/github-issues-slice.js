import { createSlice } from '@reduxjs/toolkit';

const initialState = { issuesList: [], repo: 'react', owner: 'facebook' };

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
		}
	},
});

export const githubIssuesActions = githubIssuesSlice.actions;

export default githubIssuesSlice.reducer;
