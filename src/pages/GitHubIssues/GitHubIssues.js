import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import Button from '../../components/ui/Button/Button';
import InfiniteScroll from 'react-infinite-scroll-component';
import IssueForm from './components/IssueForm';
import Issues from './components/Issues/Issues';
import axios from 'axios';
import { githubIssuesActions } from '../../store/github-issues-slice';

const NEXT_PAGE_INCREMENT = 1;
const INITIAL_NEXT_PAGE = 2;
const INITIAL_ISSUES_COUNT = 5;
const API_TOKEN = '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';

const GitHubIssues = () => {
	const dispatch = useDispatch();
	const issuesData = useSelector((state) => state.githubIssues.issuesList);
	const repoOwner = useSelector((state) => state.githubIssues.owner);
	const repoName = useSelector((state) => state.githubIssues.repo);
	const [newIssuesPage, setNewIssuesPage] = useState(INITIAL_NEXT_PAGE);

	let formattedIssues = null;

	useEffect(() => {
		if (!issuesData || !issuesData.issuesList) {
			const getIssues = async () => {
				const data = await axios.get(
					`https://api.github.com/repos/${repoOwner}/${repoName}/issues?page=1&per_page=${INITIAL_ISSUES_COUNT}`,
					{
						headers: {
							Authorization: `token ${API_TOKEN}`,
						},
					}
				);
				// console.log(data);
				dispatch(githubIssuesActions.setGitHubIssues(data.data));
			};

			getIssues();
		}
	}, [repoName, repoOwner]);

	const getMoreIssues = async () => {
		const data = await axios.get(
			`https://api.github.com/repos/facebook/react/issues?page=${newIssuesPage}&per_page=5`,
			{
				headers: {
					Authorization: `token ${API_TOKEN}`,
				},
			}
		);

		dispatch(githubIssuesActions.addGivenGitHubIssue(data.data));
		setNewIssuesPage(newIssuesPage + NEXT_PAGE_INCREMENT);
	};

	if (issuesData && issuesData.length) {
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
			<Button onClick={getMoreIssues}>Fetch more</Button>
		</div>
	);
};

export default GitHubIssues;
