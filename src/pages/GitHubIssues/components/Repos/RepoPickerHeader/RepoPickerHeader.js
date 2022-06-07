import Button from '../../../../../components/ui/Button/Button';
import RepoInfo from '../RepoInfo/RepoInfo';
import styles from './RepoPickerHeader.module.css';

const RepoPickerHeader = ({onCancel}) => {
	return (
		<header className={styles.header}>
			<h2 className={styles.title}>Pick repo</h2>
			<RepoInfo />
			<Button onClick={onCancel}>cancel</Button>
		</header>
	);
};

export default RepoPickerHeader;
