import IssueTypeIndicator from './IssueTypeIndicator';
import classes from './IssueHeader.module.css';

const IssueStatus = ({ isOpen }) => {
	const classesForBadge = `${classes.badge} ${
		isOpen ? classes.open : classes.closed
	}`;

	return <span className={classesForBadge}>{isOpen ? 'Open' : 'Closed'}</span>;
};

const IssueHeader = ({ title, issueNumber, isOpen, isPullRequest }) => {
	return (
		<header className={classes.header}>
			<IssueTypeIndicator isPullRequest={isPullRequest} />
			<IssueStatus isOpen={isOpen} />
			<h2 className={classes.title}>{title}</h2>
			<p>#{issueNumber}</p>
		</header>
	);
};

export default IssueHeader;
