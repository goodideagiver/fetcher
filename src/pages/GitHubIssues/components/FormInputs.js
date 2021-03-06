import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import {
	githubIssuesActions,
	useGithubIssuesStore,
} from '../../../store/github-issues-slice';

import * as styles from './FormInputs.module.css';

const FormInputs = ({
	repoOwnerInputError,
	isDataPresent,
	onOwnerInput,
	ownerValue,
}) => {
	const enteredFilter = useSelector((state) => state.githubIssues.filter);

	const isFilterable = !!isDataPresent || enteredFilter;

	const dispatch = useDispatch();

	const handleInputFilterValue = (event) => {
		dispatch(githubIssuesActions.setFilter(event.target.value));
	};

	const { selectedRepo, selectedRepoOwner } = useGithubIssuesStore();

	const filterLabelContent = selectedRepo
		? 'Search in ' + selectedRepoOwner + '/' + selectedRepo
		: 'Filter results by name';

	return (
		<>
			<FormControl>
				{repoOwnerInputError && (
					<p className={styles.invalid}>
						Repo owner name must be at least 3 characters long
					</p>
				)}
				<FormLabel htmlFor='repo-owner'>Repo owner name</FormLabel>
				<Input
					isInvalid={repoOwnerInputError}
					value={ownerValue}
					onInput={onOwnerInput}
					id='repo-owner'
					type='text'
				/>
			</FormControl>
			<FormControl isDisabled={!isFilterable}>
				<FormLabel htmlFor='filter-name'>{filterLabelContent}</FormLabel>
				<Input onInput={handleInputFilterValue} id='filter-name' type='text' />
			</FormControl>
		</>
	);
};

export default FormInputs;
