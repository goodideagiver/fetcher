import styles from './Repos.module.css';
import ReactDOM from 'react-dom';
import Button from '../../../../components/ui/Button/Button';
import ReposList from './ReposList/ReposList';
import RepoInfo from './RepoInfo/RepoInfo';

const Repos = ({ filteredRepos, onRepoPick, onCancel }) => {
	return ReactDOM.createPortal(
		<div className={styles.root}>
			<div className={styles.container}>
				<header className={styles.header}>
					<h2 className={styles.title}>Pick repo</h2>
					<RepoInfo />
					<Button onClick={onCancel}>cancel</Button>
				</header>
				<ReposList filteredRepos={filteredRepos} onRepoPick={onRepoPick} />
			</div>
		</div>,
		document.getElementById('overlay-root')
	);
};

export default Repos;
