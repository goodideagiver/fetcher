import classes from './IssueHeader.module.css';

const IssueStatus = ({ isOpen }) => {
	const classesForBadge = `${classes.badge} ${
		isOpen ? classes.open : classes.closed
	}`;

	return <span className={classesForBadge}>{isOpen ? 'Open' : 'Closed'}</span>;
};

const IssueHeader = ({ title, issueNumber, isOpen }) => {
	return (
		<header className={classes.header}>
			<IssueStatus isOpen={isOpen} />
			<h2 className={classes.title}>{title}</h2>
			<p>#{issueNumber}</p>
		</header>
	);
};

export default IssueHeader;
