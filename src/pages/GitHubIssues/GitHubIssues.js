import { useEffect, useState } from 'react';

import IssueForm from './components/IssueForm';
import Issues from './components/Issues/Issues';
import axios from 'axios';
import styles from './GitHubIssues.module.css';

const GitHubIssues = () => {
	const [issueCount, setIssueCount] = useState(5);
	const [issuesData, setIssuesData] = useState(null);

	useEffect(() => {
		if (issuesData === null) {
			const getIssues = async () => {
				const data = await axios.get(
					`https://api.github.com/repos/facebook/react/issues?page=1&per_page=${issueCount}`
				);
				console.log(data);
				setIssuesData(data);
			};

			getIssues();
		}
	}, []);

	return (
		<div>
			<header>
				<IssueForm />
			</header>
			<Issues data={false} />
		</div>
	);
};

export default GitHubIssues;
