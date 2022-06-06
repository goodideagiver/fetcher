import Button from './../../../components/ui/Button/Button';
import { Container } from '@chakra-ui/react';
import FormInputs from './FormInputs';
import classes from './IssueForm.module.css';
import { useFetchUserRepos } from './useFetchUserRepos';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { githubIssuesActions } from '../../../store/github-issues-slice';
import { useEffect } from 'react';
import PageLoadingSpinner from '../../../components/ui/PageLoadingSpinner/PageLoadingSpinner';
import DisplayError from './DisplayError/DisplayError';
import Repos from './Repos/Repos';

const IssueForm = ({ isDataPresent = false }) => {
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

	const { repos, loading, error, getUserRepos } = useFetchUserRepos();

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

	return (
		<>
			<Container maxW='800px'>
				<form onSubmit={searchButtonHandler} className={classes.form}>
					<FormInputs
						onOwnerInput={ownerInputHandler}
						ownerValue={inputOwner}
						isDataPresent={isDataPresent}
					/>
					<Button>Search</Button>
				</form>
			</Container>
			{error && <DisplayError>{error}</DisplayError>}
			{loading && <PageLoadingSpinner />}
			{!!repoPickerVisible && (
				<Repos
					onCancel={repoPickCancelHandler}
					filteredRepos={filteredRepos}
					onRepoPick={pickRepoHandler}
				/>
			)}
		</>
	);
};

export default IssueForm;
