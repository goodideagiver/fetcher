import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { githubIssuesActions } from '../../../store/github-issues-slice';

const FormInputs = ({ isDataPresent, onOwnerInput,ownerValue }) => {
	const enteredFilter = useSelector((state) => state.githubIssues.filter);

	const isFilterable = !!isDataPresent || enteredFilter;

	const dispatch = useDispatch();

	const handleInputFilterValue = (event) => {
		dispatch(githubIssuesActions.setFilter(event.target.value));
	}

	return (
		<>
			<FormControl>
				<FormLabel htmlFor='repo-owner'>Repo owner name</FormLabel>
				<Input value={ownerValue} onInput={onOwnerInput} id='repo-owner' type='text' />
			</FormControl>
		<FormControl isDisabled={!isFilterable}>
				<FormLabel htmlFor='filter-name'>Filter results by name</FormLabel>
				<Input onInput={handleInputFilterValue} id='filter-name' type='text' />
			</FormControl>
		</>
	);
};

export default FormInputs;
