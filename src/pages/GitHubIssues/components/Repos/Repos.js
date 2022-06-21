import styles from './Repos.module.css';
import ReactDOM from 'react-dom';
import ReposList from './ReposList/ReposList';
import RepoPickerHeader from './RepoPickerHeader/RepoPickerHeader';
import { CSSTransition } from 'react-transition-group';
import { useKeyAction } from '../../../../hooks/useKeyAction';
import SearchRepo from './SearchRepo/SearchRepo';
import { useFilterRepos } from './useFilterRepos';

const ESC_KEY_CODE = 27;

const ReposContent = ({ filteredRepos, onRepoPick, onCancel }) => {
	useKeyAction(ESC_KEY_CODE, onCancel);

	const { reposToDisplay, setreposFilterName, reposFilterName } =
		useFilterRepos(filteredRepos);

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

const AnimatedReposContent = (props) => (
	<CSSTransition
		mountOnEnter
		unmountOnExit
		timeout={150}
		in={props.visible}
		classNames={{
			enter: styles.contentEnter,
			exit: styles.contentExit,
		}}
	>
		<ReposContent
			filteredRepos={props.filteredRepos}
			onRepoPick={props.onRepoPick}
			onCancel={props.onCancel}
		/>
	</CSSTransition>
);

const AnimatedReposBackdrop = (props) => (
	<CSSTransition
		mountOnEnter
		unmountOnExit
		timeout={150}
		in={props.visible}
		classNames={{
			enter: styles.backdropEnter,
			exit: styles.backdropExit,
		}}
	>
		<ReposBackdrop onCancel={props.onCancel} />
	</CSSTransition>
);

const Repos = ({ filteredRepos, onRepoPick, onCancel, visible = false }) => {
	return (
		<>
			<AnimatedReposContent
				filteredRepos={filteredRepos}
				onRepoPick={onRepoPick}
				onCancel={onCancel}
				visible={visible}
			></AnimatedReposContent>
			<AnimatedReposBackdrop
				visible={visible}
				onCancel={onCancel}
			></AnimatedReposBackdrop>
		</>
	);
};

export default Repos;
