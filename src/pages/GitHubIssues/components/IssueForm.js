import Button from './../../../components/ui/Button/Button';
import FormInputs from './FormInputs';
import classes from './IssueForm.module.css';

const IssueForm = ({ isDataPresent = true }) => {
	return (
		<form className={classes.form}>
			<FormInputs isDataPresent={isDataPresent} />
			<Button primary>Search</Button>
		</form>
	);
};

export default IssueForm;
