import { useDispatch, useSelector } from 'react-redux';

import { useState } from 'react';
import { githubIssuesActions } from '../../../store/github-issues-slice';
import { useEffect } from 'react';

export const useIssueForm = (repos, getUserRepos) => {
	const [inputOwner, setInputOwner] = useState('');

	const [modalVisible, setModalVisible] = useState(false);

	const [inputError, setInputError] = useState(false);

	const owner = useSelector((state) => state.githubIssues.owner);

	const repoName = useSelector((state) => state.githubIssues.repo);

	const dispatch = useDispatch();

	const ownerInputHandler = (event) => {
		setInputError(false);
		setInputOwner(event.target.value);
	};

	const pickRepoHandler = (repoName) => {
		dispatch(githubIssuesActions.setRepoName(repoName));
	};

	const searchButtonHandler = (event) => {
		event.preventDefault();

		if (inputOwner && inputOwner.trim().length >= 3) {
			dispatch(githubIssuesActions.setRepoName(''));
			dispatch(githubIssuesActions.setGitHubIssues(null));
			dispatch(githubIssuesActions.setOwner(inputOwner));
			setInputOwner('');
		} else {
			setInputError(true);
		}
	};

	useEffect(() => {
		if (!repoName && owner) {
			getUserRepos();
		}
	}, [repoName, owner]);

	useEffect(() => {
		if (owner && !repoName && !!repos && !!repos.length) {
			setModalVisible(true);
		} else if (modalVisible) {
			setModalVisible(false);
		}
	}, [repos, owner, repoName]);

	const filteredRepos = repos && repos.filter((repo) => repo.open_issues_count);

	const repoPickCancelHandler = () => {
		dispatch(githubIssuesActions.setRepoName(''));
		dispatch(githubIssuesActions.setGitHubIssues(null));
		dispatch(githubIssuesActions.setOwner(''));
	};

	return {
		repoPickerVisible: modalVisible,
		filteredRepos,
		repoPickCancelHandler,
		ownerInputHandler,
		searchButtonHandler,
		pickRepoHandler,
		inputOwner,
		inputError,
	};
};
