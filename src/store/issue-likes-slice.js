import { createSlice } from '@reduxjs/toolkit';

const initialState = { likedIssues: [] };

export const issueLikesSlice = createSlice({
	name: 'issueLikes',
	initialState,
	reducers: {
		addLikedIssue: (state, action) => {
			state.likedIssues.push(action.payload);
		},
		addLikeToIssue: (state, action) => {
			const issue = state.likedIssues.find(
				(issue) => issue.id === action.payload.issueId
			);
			if (issue) {
				issue.likes += 1;
			} else {
				state.likedIssues.push({
					id: action.payload.issueId,
					likes: 1,
				});
			}
		},
		removeLikeFromIssue: (state, action) => {
			const issue = state.likedIssues.find(
				(issue) => issue.id === action.payload.issueId
			);
			if (issue) {
				issue.likes -= 1;
			} else {
				state.likedIssues.push({
					id: action.payload.issueId,
					likes: -1,
				});
			}
		},
		setLikedIssues: (state, action) => {
			state.likedIssues = action.payload;
		}
	},
});

export const issueLikesActions = issueLikesSlice.actions;

export default issueLikesSlice.reducer;
