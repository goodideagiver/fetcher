import styles from './Repos.module.css';
import ReactDOM from 'react-dom';
import ReposList from './ReposList/ReposList';
import RepoPickerHeader from './RepoPickerHeader/RepoPickerHeader';

const Repos = ({ filteredRepos, onRepoPick, onCancel }) => {
	return ReactDOM.createPortal(
		<div className={styles.root}>
			<div className={styles.container}>
				<RepoPickerHeader onCancel={onCancel}/>
				<ReposList filteredRepos={filteredRepos} onRepoPick={onRepoPick} />
			</div>
		</div>,
		document.getElementById('overlay-root')
	);
};

export default Repos;
