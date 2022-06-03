import { DateCreatedDisplay } from '../../../Issue';
import IssueLink from './IssueLink';
import IssueMarkdown from './IssueMarkdown';
import classes from './IssueContent.module.css';

const IssueContent = ({ description, dateCreated, url }) => {
	return (
		<main className={classes.info}>
			<DateCreatedDisplay date={dateCreated} />
			<div className={classes.desc}>
				<h3>Detailed issue description: </h3>
				<IssueMarkdown description={description} />
			</div>
			<IssueLink url={url} />
		</main>
	);
};

export default IssueContent;
