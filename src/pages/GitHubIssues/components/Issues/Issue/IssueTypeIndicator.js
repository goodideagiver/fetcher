import { IoMdBug, IoMdGitPullRequest } from 'react-icons/io';

import classes from './IssueTypeIndicator.module.css';

const IssueTypeIndicator = ({ isPullRequest }) => {
	const icon = !isPullRequest ? <IoMdBug /> : <IoMdGitPullRequest />;

	return <div className={classes.iconContainer}>{icon}</div>;
};

export default IssueTypeIndicator;
