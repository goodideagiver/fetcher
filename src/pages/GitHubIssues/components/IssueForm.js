import Button from './../../../components/ui/Button/Button';
import { Container } from '@chakra-ui/react';
import FormInputs from './FormInputs';
import classes from './IssueForm.module.css';
import { useFetchUserRepos } from './useFetchUserRepos';
import PageLoadingSpinner from '../../../components/ui/PageLoadingSpinner/PageLoadingSpinner';
import DisplayError from './DisplayError/DisplayError';
import RepoPickerModal from './Repos/Repos';
import { useIssueForm } from './useIssueForm';

const IssueFormContent = ({
	searchButtonHandler,
	ownerInputHandler,
	inputOwner,
	isDataPresent,
	inputError,
}) => {
	return (
		<Container maxW='800px'>
			<form onSubmit={searchButtonHandler} className={classes.form}>
				<FormInputs
					repoOwnerInputError={inputError}
					onOwnerInput={ownerInputHandler}
					ownerValue={inputOwner}
					isDataPresent={isDataPresent}
				/>
				<Button>Search</Button>
			</form>
		</Container>
	);
};

const IssueForm = ({ isDataPresent = false }) => {
	const { foundUserRepos, loading, error, getUserRepos } = useFetchUserRepos();

	const {
		repoPickerVisible,
		filteredRepos,
		repoPickCancelHandler,
		ownerInputHandler,
		searchButtonHandler,
		pickRepoHandler,
		inputOwner,
		inputError,
	} = useIssueForm(foundUserRepos, getUserRepos);

	return (
		<>
			<IssueFormContent
				inputError={inputError}
				searchButtonHandler={searchButtonHandler}
				ownerInputHandler={ownerInputHandler}
				inputOwner={inputOwner}
				isDataPresent={isDataPresent}
			/>
			{error && <DisplayError errorMessage={error} />}
			{loading && <PageLoadingSpinner />}
			<RepoPickerModal
				onCancel={repoPickCancelHandler}
				filteredRepos={filteredRepos}
				onRepoPick={pickRepoHandler}
				visible={!!repoPickerVisible && !!filteredRepos}
			/>
		</>
	);
};

export default IssueForm;
