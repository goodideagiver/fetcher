import IssueTypeIndicator from './IssueTypeIndicator';
import classes from './IssueHeader.module.css';

import ReactTooltip from 'react-tooltip';

const IssueStatus = ({ isOpen }) => {
	const classesForBadge = `${classes.badge} ${
		isOpen ? classes.open : classes.closed
	}`;

	return <span className={classesForBadge}>{isOpen ? 'Open' : 'Closed'}</span>;
};

const IssueHeader = ({ title, issueNumber, isOpen, isPullRequest }) => {
	return (
		<header data-tip={title} className={classes.header}>
			<IssueTypeIndicator isPullRequest={isPullRequest} />
			<IssueStatus isOpen={isOpen} />
			<h2 className={classes.title}>{title}</h2>
			<p>#{issueNumber}</p>
			<ReactTooltip
				place='bottom'
				effect='solid'
				type='light'
				className={classes.tooltip}
			/>
		</header>
	);
};

export default IssueHeader;
