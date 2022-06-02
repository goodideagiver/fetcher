import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import styles from './PageLoadingSpinner.module.css';

const PageLoadingSpinner = () => {
	return (
		<div className={styles.loading}>
			<LoadingSpinner />
		</div>
	);
};

export default PageLoadingSpinner;
