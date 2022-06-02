import { useEffect, useState } from 'react';

import IssueForm from './components/IssueForm';
import Issues from './components/Issues/Issues';
import axios from 'axios';
import styles from './GitHubIssues.module.css';

const DUMMY_ISSUES = [
	{
		id: 1,
		title: 'Issue 1',
		issueNumber: 1,
		dateCreated: '2020-01-01',
		isOpen: true,
		description: 'This is issue 1',
	},
	{
		id: 2,
		title: 'Foobar issue',
		issueNumber: 2137,
		dateCreated: '2019-05-01',
		isOpen: false,
		description: 'About the foobar problem',
	},
];

const GitHubIssues = () => {
	const [issuesData, setIssuesData] = useState(null);

	useEffect(() => {
		if (issuesData === null) {
			const getIssues = async () => {
				const data = await axios.get(
					`https://api.github.com/repos/facebook/react/issues?page=1&per_page=5`
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
			<Issues data={DUMMY_ISSUES} />
		</div>
	);
};

export default GitHubIssues;
