import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import DisplayError from './components/DisplayError/DisplayError';
import InfiniteScroll from 'react-infinite-scroll-component';
import IssueForm from './components/IssueForm';
import Issues from './components/Issues/Issues';
import PageLoadingSpinner from '../../components/ui/PageLoadingSpinner/PageLoadingSpinner';
import axios from 'axios';
import classes from './GitHubIssues.module.css';
import { githubIssuesActions } from '../../store/github-issues-slice';
import { issueLikesActions } from '../../store/issue-likes-slice';

const NEXT_PAGE_INCREMENT = 1;
const INITIAL_NEXT_PAGE = 2;
const INITIAL_ISSUES_COUNT = 5;
const API_TOKEN = ''; //for testing purposes (development)

const GitHubIssues = () => {
	const [error, setError] = useState(null);
	const dispatch = useDispatch();
	const issuesData = useSelector((state) => state.githubIssues.issuesList);
	const repoOwner = useSelector((state) => state.githubIssues.owner);
	const repoName = useSelector((state) => state.githubIssues.repo);
	const [newIssuesPage, setNewIssuesPage] = useState(INITIAL_NEXT_PAGE);
	const [isLoading, setIsLoading] = useState(false);

	const likedIssues = useSelector((state) => state.likedIssues);

	let formattedIssues = null;

	useEffect(() => {
		const existingIssues = localStorage.getItem('likedIssues');
		if (existingIssues) {
			dispatch(issueLikesActions.setLikedIssues(JSON.parse(existingIssues)));
		} 
	}, []);

	useEffect(() => {
		if ((!issuesData || !issuesData.issuesList) && repoOwner && repoName) {
			const getIssues = async () => {
				setIsLoading(true);
				try {
					let data;
					if (API_TOKEN) {
						data = await axios.get(
							`https://api.github.com/repos/${repoOwner}/${repoName}/issues?page=1&per_page=${INITIAL_ISSUES_COUNT}`,
							{
								headers: {
									Authorization: `token ${API_TOKEN}`,
								},
							}
						);
					} else {
						data = await axios.get(
							`https://api.github.com/repos/${repoOwner}/${repoName}/issues?page=1&per_page=${INITIAL_ISSUES_COUNT}`
						);
					}
					dispatch(githubIssuesActions.setGitHubIssues(data.data));
					setError(null);
				} catch (error) {
					setError(error.response.data.message);
				}
				setIsLoading(false);
			};

			getIssues();
		}
	}, [repoName, repoOwner]);

	const getMoreIssues = async () => {
		try {
			setIsLoading(true);
			let data;
			if (API_TOKEN) {
				data = await axios.get(
					`https://api.github.com/repos/facebook/react/issues?page=${newIssuesPage}&per_page=5`,
					{
						headers: {
							Authorization: `token ${API_TOKEN}`,
						},
					}
				);
			} else {
				data = await axios.get(
					`https://api.github.com/repos/facebook/react/issues?page=${newIssuesPage}&per_page=5`
				);
			}

			dispatch(githubIssuesActions.addGivenGitHubIssue(data.data));
			setNewIssuesPage(newIssuesPage + NEXT_PAGE_INCREMENT);
		} catch (error) {
			setError(error.response.data.message);
		}
		setIsLoading(false);
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
		<div className={classes['issues-wrapper']}>
			<header>
				<IssueForm />
			</header>
			{error && <DisplayError errorMessage={error} />}
			{formattedIssues && !error && issuesData && issuesData.length && (
				<div id='scrollContainer' className={classes['scrollable-container']}>
					<InfiniteScroll
						dataLength={issuesData.length}
						next={getMoreIssues}
						hasMore={true}
						scrollableTarget='scrollContainer'
					>
						<Issues issuesList={formattedIssues} />
					</InfiniteScroll>
					{isLoading && <PageLoadingSpinner />}
				</div>
			)}
		</div>
	);
};

export default GitHubIssues;
