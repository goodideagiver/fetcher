import { FormControl, FormLabel, Input } from '@chakra-ui/react';

const FormInputs = ({ isDataPresent }) => {
	return (
		<>
			<FormControl>
				<FormLabel htmlFor='repo-name'>Repository name</FormLabel>
				<Input id='repo-name' type='email' />
			</FormControl>
			{isDataPresent && (
				<FormControl>
					<FormLabel htmlFor='filter-name'>Filter results by name</FormLabel>
					<Input id='filter-name' type='email' />
				</FormControl>
			)}
		</>
	);
};

export default FormInputs;
