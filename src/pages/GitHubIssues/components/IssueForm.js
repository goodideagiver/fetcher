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

const IssueForm = ({ isDataPresent = false }) => {
	const [inputOwner, setInputOwner] = useState('');

	const owner = useSelector((state) => state.githubIssues.owner);

	const repoName = useSelector((state) => state.githubIssues.repo);

	let repoPickerVisible = false;

	const dispatch = useDispatch();

	const ownerInputHandler = (event) => {
		setInputOwner(event.target.value);
	};

	const pickRepoHandler = (repoName) => {
		dispatch(githubIssuesActions.setRepoName(repoName));
	}

	const { repos, loading, error, getUserRepos } = useFetchUserRepos();

	const searchButtonHandler = (event) => {
		event.preventDefault();

		if (inputOwner) {
			dispatch(githubIssuesActions.setRepoName(''));
			dispatch(githubIssuesActions.setGitHubIssues(null));
			dispatch(githubIssuesActions.setOwner(inputOwner));
		}
	};
	
	useEffect(() => {
		if (!repoName && owner) {
			getUserRepos();
		}
	}, [repoName, owner]);

	if (owner && !repoName && repos && repos.length) {
		repoPickerVisible = true;
	} else {
		repoPickerVisible = false;
	}

	const filteredRepos = repos && repos.filter((repo) => repo.open_issues_count > 0);

	return (
		<Container maxW='800px'>
			<form onSubmit={searchButtonHandler} className={classes.form}>
				<FormInputs
					onOwnerInput={ownerInputHandler}
					isDataPresent={isDataPresent}
				/>
				<Button>Search</Button>
			</form>
			{error && <p>{error}</p>}
			{loading && <PageLoadingSpinner />}
			{repoPickerVisible && (
				<ul>
					{filteredRepos.map((repo) => (
						<li key={repo.id}>
							<button onClick={() => pickRepoHandler(repo.name)}>
								{repo.full_name} Issues: {repo.open_issues_count}
							</button>
						</li>
					))}
				</ul>
			)}
		</Container>
	);
};

export default IssueForm;
