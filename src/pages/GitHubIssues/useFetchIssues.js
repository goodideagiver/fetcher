import { useEffect, useState } from 'react';

import axios from 'axios';
import { githubIssuesActions } from '../../store/github-issues-slice';
import { useDispatch, useSelector } from 'react-redux';
import { API_TOKEN } from '../../assets/js/API_TOKEN';

const NEXT_PAGE_INCREMENT = 1;
const INITIAL_NEXT_PAGE = 2;
const INITIAL_ISSUES_COUNT = 5;

const useFetchIssues = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [newIssuesPage, setNewIssuesPage] = useState(INITIAL_NEXT_PAGE);
	const [hasMoreIssues, setHasMoreIssues] = useState(true);

	const issuesData = useSelector((state) => state.githubIssues.issuesList);
	const repoOwner = useSelector((state) => state.githubIssues.owner);
	const repoName = useSelector((state) => state.githubIssues.repo);
	const filter = useSelector((state) => state.githubIssues.filter);

	let formattedIssues = null;

	const dispatch = useDispatch();

	useEffect(() => {
		if ((!issuesData || !issuesData.issuesList) && repoOwner && repoName) {
			setHasMoreIssues(true);
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
					if (data.data.length < INITIAL_ISSUES_COUNT) {
						setHasMoreIssues(false);
					}
					setError(null);
				} catch (error) {
					if (
						error.response &&
						error.response.data &&
						error.response.data.message
					) {
						setError(error.response.data.message);
					} else {
						setError(error.message);
					}
				}
				setIsLoading(false);
			};
			setNewIssuesPage(INITIAL_NEXT_PAGE);

			getIssues();
		}
	}, [repoName, repoOwner]);

	const getMoreIssues = async () => {
		try {
			setIsLoading(true);
			let data;
			if (API_TOKEN) {
				data = await axios.get(
					`https://api.github.com/repos/${repoOwner}/${repoName}/issues?page=${newIssuesPage}&per_page=5`,
					{
						headers: {
							Authorization: `token ${API_TOKEN}`,
						},
					}
				);
			} else {
				data = await axios.get(
					`https://api.github.com/repos/${repoOwner}/${repoName}/issues?page=${newIssuesPage}&per_page=5`
				);
			}

			dispatch(githubIssuesActions.addGivenGitHubIssue(data.data));
			if (data.data.length < INITIAL_ISSUES_COUNT) {
				setHasMoreIssues(false);
			}
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

		if (filter) {
			formattedIssues = formattedIssues.filter((issue) => {
				return issue.title.toLowerCase().includes(filter.toLowerCase().trim());
			});
		}
	}

	return {
		isLoading,
		error,
		getMoreIssues,
		formattedIssues,
		repoOwner,
		repoName,
		issuesData,
		hasMoreIssues,
	};
};

export default useFetchIssues;
