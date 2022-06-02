import IssueDetails from './IssueDetails/IssueDetails';
import IssueHeader from './IssueHeader';
import styles from './Issue.module.css';
import { useState } from 'react';

const Issue = ({
	title,
	issueNumber,
	dateCreated,
	description,
	isOpen,
	url,
}) => {
	const [detailsOpen, setDetailsOpen] = useState(false);

	const formattedDate = new Date(dateCreated).toLocaleDateString();

	const toggleDetails = () => setDetailsOpen(!detailsOpen);

	return (
		<>
			<article onClick={toggleDetails} className={styles.issue}>
				<IssueHeader title={title} issueNumber={issueNumber} isOpen={isOpen} />
				<p className={styles.issueDate}>Created: {formattedDate}</p>
			</article>
			{detailsOpen && (
				<IssueDetails
					onClose={toggleDetails}
					data={{ title, issueNumber, dateCreated, description, isOpen, url }}
				/>
			)}
		</>
	);
};

export default Issue;
