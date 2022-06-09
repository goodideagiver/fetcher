import styles from './Repos.module.css';
import ReactDOM from 'react-dom';
import ReposList from './ReposList/ReposList';
import RepoPickerHeader from './RepoPickerHeader/RepoPickerHeader';
import { CSSTransition } from 'react-transition-group';

const ReposContent = ({ filteredRepos, onRepoPick, onCancel }) => {
	return ReactDOM.createPortal(
		<div className={styles.root}>
			<div className={styles.container}>
				<RepoPickerHeader onCancel={onCancel} />
				<ReposList filteredRepos={filteredRepos} onRepoPick={onRepoPick} />
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
				timeout={500}
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
				timeout={500}
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
