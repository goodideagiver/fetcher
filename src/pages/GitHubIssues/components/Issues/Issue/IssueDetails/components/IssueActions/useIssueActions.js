import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { issueLikesActions } from '../../../../../../../../store/issue-likes-slice';

export const useIssueActions = (issueId) => {
	const issueArray = useSelector((state) => state.likedIssues);
	const likedIssuesArray = useSelector(
		(state) => state.likedIssues.likedIssues
	);

	const existingIssue =
		issueArray &&
		issueArray.likedIssues.length &&
		issueArray.likedIssues.find((issue) => issue.id === issueId);

	const issueVotes = existingIssue && existingIssue.likes;

	const dispatch = useDispatch();

	const upvoteIssueHandler = () => {
		dispatch(issueLikesActions.addLikeToIssue({ issueId }));
	};

	const downvoteIssueHandler = () => {
		dispatch(issueLikesActions.removeLikeFromIssue({ issueId }));
	};

	useEffect(() => {
		localStorage.setItem('likedIssues', JSON.stringify(likedIssuesArray));
	}, [issueVotes]);

	return {
		upvoteIssueHandler,
		downvoteIssueHandler,
		issueVotes,
	};
};
