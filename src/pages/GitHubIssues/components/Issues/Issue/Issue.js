import IssueDetails from './IssueDetails/IssueDetails';
import IssueHeader from './IssueHeader';
import styles from './Issue.module.css';
import { useState } from 'react';

export const DateCreatedDisplay = ({ date }) => (
	<p className={styles.issueDate}>Created: {date}</p>
);

const Issue = ({
	title,
	issueNumber,
	dateCreated,
	description,
	isOpen,
	url,
	isPullRequest,
}) => {
	const [detailsOpen, setDetailsOpen] = useState(false);

	const formattedDate = new Date(dateCreated).toUTCString();

	const toggleDetails = () => setDetailsOpen(!detailsOpen);

	return (
		<>
			<article onClick={toggleDetails} className={styles.issue}>
				<IssueHeader
					title={title}
					issueNumber={issueNumber}
					isOpen={isOpen}
					isPullRequest={isPullRequest}
				/>
				<DateCreatedDisplay date={formattedDate} />
			</article>
			{detailsOpen && (
				<IssueDetails
					onClose={toggleDetails}
					data={{
						isPullRequest,
						title,
						issueNumber,
						dateCreated,
						description,
						isOpen,
						url,
					}}
				/>
			)}
		</>
	);
};

export default Issue;
