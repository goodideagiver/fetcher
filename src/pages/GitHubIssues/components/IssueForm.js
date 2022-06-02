import Button from './../../../components/ui/Button/Button';
import { Container } from '@chakra-ui/react';
import FormInputs from './FormInputs';
import classes from './IssueForm.module.css';

const IssueForm = ({ isDataPresent = false }) => {
	return (
		<Container maxW='800px'>
			<form className={classes.form}>
				<FormInputs isDataPresent={isDataPresent} />
				<Button>Search</Button>
			</form>
		</Container>
	);
};

export default IssueForm;
