import { CgSmileSad } from 'react-icons/cg';
import styles from './DisplayError.module.css';

const DisplayError = ({ errorMessage }) => {
	return (
		<div className={styles.errorDisplay}>
			<div>
				<CgSmileSad className={styles.errorIcon}/>
				<p className={styles.message}>{errorMessage}</p>
			</div>
		</div>
	);
};

export default DisplayError;
