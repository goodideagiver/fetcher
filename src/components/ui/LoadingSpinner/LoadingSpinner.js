import styles from './LoadingSpinner.module.css';

const LoadingSpinner = () => (
	<div className={styles['lds-ring']}>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
);

export default LoadingSpinner;
