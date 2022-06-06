import { useSelector } from 'react-redux';
import styles from './RepoInfo.module.css';

const RepoInfo = () => {
	const owner = useSelector((state) => state.githubIssues.owner);

	return (
		<div className={styles.root}>
			<p>{owner}</p>
		</div>
	);
};

export default RepoInfo;
