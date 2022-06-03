import { configureStore } from '@reduxjs/toolkit';
import githubIssuesReducer from './github-issues-slice';
import issueLikesReducer from './issue-likes-slice';

export const store = configureStore({
	reducer: {
		githubIssues: githubIssuesReducer,
    likedIssues: issueLikesReducer,
	},
});
