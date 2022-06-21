import styles from './Repos.module.css';
import ReactDOM from 'react-dom';
import ReposList from './ReposList/ReposList';
import RepoPickerHeader from './RepoPickerHeader/RepoPickerHeader';
import { CSSTransition } from 'react-transition-group';
import { useKeyAction } from '../../../../hooks/useKeyAction';
import SearchRepo from './SearchRepo/SearchRepo';
import { useState } from 'react';

const ESC_KEY_CODE = 27;

const ReposContent = ({ filteredRepos, onRepoPick, onCancel }) => {
	useKeyAction(ESC_KEY_CODE, onCancel);

	const [reposFilterName, setreposFilterName] = useState('');

	let reposToDisplay = filteredRepos;
	if (reposFilterName) {
		reposToDisplay = filteredRepos.filter((repo) => {
			return repo.name.toLowerCase().includes(reposFilterName.toLowerCase());
		});
	}

	return ReactDOM.createPortal(
		<div className={styles.root}>
			<div className={styles.container}>
				<RepoPickerHeader onCancel={onCancel} />
				<SearchRepo
					value={reposFilterName}
					onRepoNameInput={setreposFilterName}
				/>
				<ReposList filteredRepos={reposToDisplay} onRepoPick={onRepoPick} />
			</div>
		</div>,
		document.getElementById('overlay-root')
	);
};

const ReposBackdrop = ({ onCancel }) => {
	return ReactDOM.createPortal(
		<div onClick={onCancel} className={styles.backdrop} />,
		document.getElementById('overlay-root')
	);
};

const Repos = ({ filteredRepos, onRepoPick, onCancel, visible = false }) => {
	return (
		<>
			<CSSTransition
				mountOnEnter
				unmountOnExit
				timeout={150}
				in={visible}
				classNames={{
					enter: styles.contentEnter,
					exit: styles.contentExit,
				}}
			>
				<ReposContent
					filteredRepos={filteredRepos}
					onRepoPick={onRepoPick}
					onCancel={onCancel}
				/>
			</CSSTransition>
			<CSSTransition
				mountOnEnter
				unmountOnExit
				timeout={150}
				in={visible}
				classNames={{
					enter: styles.backdropEnter,
					exit: styles.backdropExit,
				}}
			>
				<ReposBackdrop onCancel={onCancel} />
			</CSSTransition>
		</>
	);
};

export default Repos;
