import { useDispatch, useSelector } from 'react-redux';

import Button from '../../../../../../../../components/ui/Button/Button';
import IssueVoteDisplay from './IssueVoteDisplay';
import classes from './IssueActions.module.css';
import { issueLikesActions } from '../../../../../../../../store/issue-likes-slice';

const IssueActions = ({ onClose, issueId }) => {
	const issueArray = useSelector((state) => state.likedIssues);
	const likedIssuesArray = useSelector((state) => state.likedIssues.likedIssues);

	const existingIssue =
		issueArray &&
		issueArray.likedIssues.length &&
		issueArray.likedIssues.find((issue) => issue.id === issueId);

	const issueVotes = existingIssue && existingIssue.likes;

	const dispatch = useDispatch();

	const updateLikesLocalStorage = () => {
		localStorage.setItem('likedIssues', JSON.stringify(likedIssuesArray));
	};

	const upvoteIssueHandler = () => {
		dispatch(issueLikesActions.addLikeToIssue({ issueId }));
		updateLikesLocalStorage();
	};

	const downvoteIssueHandler = () => {
		dispatch(issueLikesActions.removeLikeFromIssue({ issueId }));
		updateLikesLocalStorage();
	};

	return (
		<div className={classes.actions}>
			<IssueVoteDisplay voteCount={issueVotes} />
			<Button onClick={upvoteIssueHandler}>😍 Up</Button>
			<Button onClick={downvoteIssueHandler}>😣 Down</Button>
			<Button onClick={onClose} primary={true}>
				Exit
			</Button>
		</div>
	);
};

export default IssueActions;
