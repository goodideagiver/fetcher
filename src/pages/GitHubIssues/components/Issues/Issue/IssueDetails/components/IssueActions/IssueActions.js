import Button from '../../../../../../../../components/ui/Button/Button';
import classes from './IssueActions.module.css';

const IssueActions = ({ onClose }) => {
	return (
		<div className={classes.actions}>
			<Button>😍 Up</Button>
			<Button>😣 Down</Button>
			<Button onClick={onClose} primary={true}>
				Exit
			</Button>
		</div>
	);
};

export default IssueActions;
