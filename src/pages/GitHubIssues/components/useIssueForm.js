import { useDispatch, useSelector } from 'react-redux';

import { useState } from 'react';
import { githubIssuesActions } from '../../../store/github-issues-slice';
import { useEffect } from 'react';

export const useIssueForm = (repos, getUserRepos) => {
	const [inputOwner, setInputOwner] = useState('');

	const owner = useSelector((state) => state.githubIssues.owner);

	const repoName = useSelector((state) => state.githubIssues.repo);

	const dispatch = useDispatch();

	const ownerInputHandler = (event) => {
		setInputOwner(event.target.value);
	};

	const pickRepoHandler = (repoName) => {
		dispatch(githubIssuesActions.setRepoName(repoName));
	};

	const searchButtonHandler = (event) => {
		event.preventDefault();

		if (inputOwner) {
			dispatch(githubIssuesActions.setRepoName(''));
			dispatch(githubIssuesActions.setGitHubIssues(null));
			dispatch(githubIssuesActions.setOwner(inputOwner));
			setInputOwner('');
		}
	};

	useEffect(() => {
		if (!repoName && owner) {
			getUserRepos();
		}
	}, [repoName, owner]);

	const repoPickerVisible = owner && !repoName && !!repos && !!repos.length;

	const filteredRepos = repos && repos.filter((repo) => repo.open_issues_count);

	const repoPickCancelHandler = () => {
		dispatch(githubIssuesActions.setRepoName(''));
		dispatch(githubIssuesActions.setGitHubIssues(null));
		dispatch(githubIssuesActions.setOwner(''));
	};

	return {
		repoPickerVisible,
		filteredRepos,
		repoPickCancelHandler,
		ownerInputHandler,
		searchButtonHandler,
		pickRepoHandler,
    inputOwner
	};
};
