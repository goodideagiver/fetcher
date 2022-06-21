import Button from '../../../../../../../../components/ui/Button/Button';
import IssueVoteDisplay from './IssueVoteDisplay';
import classes from './IssueActions.module.css';
import { useIssueActions } from './useIssueActions';
import { useKeyAction } from '../../../../../../../../hooks/useKeyAction';

const ESC_KEY_CODE = 27;

const IssueActions = ({ onClose, issueId }) => {
	const { issueVotes, upvoteIssueHandler, downvoteIssueHandler } =
		useIssueActions(issueId);

	useKeyAction(ESC_KEY_CODE, onClose);

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
