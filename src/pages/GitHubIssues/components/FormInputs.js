import { FormControl, FormLabel, Input } from '@chakra-ui/react';

const FormInputs = ({ isDataPresent }) => {
	const isFilterable = !!isDataPresent;

	return (
		<>
			<FormControl>
				<FormLabel htmlFor='repo-name'>Repo owner name</FormLabel>
				<Input id='repo-name' type='email' />
			</FormControl>
			<FormControl isDisabled={!isFilterable}>
				<FormLabel htmlFor='filter-name'>Filter results by name</FormLabel>
				<Input id='filter-name' type='email' />
			</FormControl>
		</>
	);
};

export default FormInputs;
