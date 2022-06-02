import { useEffect, useState } from 'react';

import IssueForm from './components/IssueForm';
import Issues from './components/Issues/Issues';
import axios from 'axios';
import styles from './GitHubIssues.module.css';

const GitHubIssues = () => {
	const [issuesData, setIssuesData] = useState(null);

	let formattedIssues = null;

	useEffect(() => {
		if (issuesData === null) {
			const getIssues = async () => {
				const data = await axios.get(
					`https://api.github.com/repos/facebook/react/issues?page=1&per_page=5`
				);
				console.log(data);
				setIssuesData(data.data);
			};

			getIssues();
		}
	}, []);

	if (issuesData) {
		formattedIssues = issuesData.map((issue) => {
			return {
				id: issue.id,
				title: issue.title,
				issueNumber: issue.number,
				dateCreated: issue.created_at,
				isOpen: issue.state === 'open',
				description: issue.body,
				url: issue.html_url,
			};
		});
	}

	return (
		<div>
			<header>
				<IssueForm />
			</header>
			<Issues issuesList={formattedIssues} />
		</div>
	);
};

export default GitHubIssues;
