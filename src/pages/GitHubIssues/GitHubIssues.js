import { useEffect, useState } from 'react';

import InfiniteScroll from 'react-infinite-scroll-component';
import IssueForm from './components/IssueForm';
import Issues from './components/Issues/Issues';
import axios from 'axios';

const newPageNumberIncrement = 1;
const initialPageNumber = 1;

const GitHubIssues = () => {
	const [issuesData, setIssuesData] = useState(null);
	const [page, setPage] = useState(initialPageNumber);

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

	const getNextPage = async () => {
		setPage(page + newPageNumberIncrement);

		const data = await axios.get(
			`https://api.github.com/repos/facebook/react/issues?page=1&per_page=5`
		);

		setIssuesData(data.data);
	};

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
				isPullRequest: issue.pull_request,
			};
		});
	}

	return (
		<div>
			<header>
				<IssueForm />
			</header>
			{formattedIssues && (
				<InfiniteScroll
					next={'feed me more'}
					dataLength={issuesData.length}
					hasMore={true}
					loader={<h4>Loading...</h4>}
				>
					<Issues issuesList={formattedIssues} />
				</InfiniteScroll>
			)}
		</div>
	);
};

export default GitHubIssues;
