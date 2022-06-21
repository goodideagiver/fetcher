import Button from '../../../../../components/ui/Button/Button';
import styles from './SearchRepo.module.css';

import { Input, FormLabel } from '@chakra-ui/react';

const SearchRepo = ({ value, onRepoNameInput }) => {
	const repoNameInputHandler = (event) => {
		onRepoNameInput(event.target.value);
	};

	const repoNameReset = (event) => {
		event.preventDefault();
		onRepoNameInput('');
	};

	return (
		<form className={styles.form}>
			<FormLabel className={styles.label} htmlFor='repo-name'>
				Search repo
			</FormLabel>
			<Input
				className={styles.input}
				value={value}
				onInput={repoNameInputHandler}
				id='repo-name'
				type='text'
			/>
			<Button onClick={repoNameReset} className={styles.button}>
				Clear
			</Button>
		</form>
	);
};

export default SearchRepo;
