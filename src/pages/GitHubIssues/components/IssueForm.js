import Button from './../../../components/ui/Button/Button';
import { Container } from '@chakra-ui/react';
import FormInputs from './FormInputs';
import classes from './IssueForm.module.css';
import { useFetchUserRepos } from './useFetchUserRepos';
import PageLoadingSpinner from '../../../components/ui/PageLoadingSpinner/PageLoadingSpinner';
import DisplayError from './DisplayError/DisplayError';
import RepoPickerModal from './Repos/Repos';
import { useIssueForm } from './useIssueForm';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const FormActions = ({ onVisibilityChange, formVisible }) => {
	const visibilityToggleHandler = (event) => {
		event.preventDefault();
		onVisibilityChange((state) => !state);
	};

	const visibilityButtonText = formVisible ? 'Hide form' : 'Show form';

	return (
		<div className={classes.actions}>
			<Button onClick={visibilityToggleHandler}>{visibilityButtonText}</Button>
		</div>
	);
};

const IssueFormContent = ({
	searchButtonHandler,
	ownerInputHandler,
	inputOwner,
	isDataPresent,
	inputError,
}) => {
	const [isVisible, setIsVisible] = useState(true);

	return (
		<Container maxW='800px'>
			<CSSTransition
				mountOnEnter
				unmountOnExit
				in={isVisible}
				timeout={200}
				classNames={{
					enter: classes.formEnter,
					exit: classes.formExit,
				}}
			>
				<form onSubmit={searchButtonHandler} className={classes.form}>
					<FormInputs
						repoOwnerInputError={inputError}
						onOwnerInput={ownerInputHandler}
						ownerValue={inputOwner}
						isDataPresent={isDataPresent}
					/>
					<Button type='submit'>Search</Button>
				</form>
			</CSSTransition>
			<FormActions onVisibilityChange={setIsVisible} formVisible={isVisible} />
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
