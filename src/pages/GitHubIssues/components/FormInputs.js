import { FormControl, FormLabel, Input } from '@chakra-ui/react';

const FormInputs = ({ isDataPresent, onOwnerInput,ownerValue }) => {
	const isFilterable = !!isDataPresent;

	return (
		<>
			<FormControl>
				<FormLabel htmlFor='repo-owner'>Repo owner name</FormLabel>
				<Input value={ownerValue} onInput={onOwnerInput} id='repo-owner' type='text' />
			</FormControl>
		<FormControl isDisabled={!isFilterable}>
				<FormLabel htmlFor='filter-name'>Filter results by name</FormLabel>
				<Input id='filter-name' type='text' />
			</FormControl>
		</>
	);
};

export default FormInputs;
