import styles from './Repos.module.css';
import ReactDOM from 'react-dom';
import Button from '../../../../components/ui/Button/Button';

const Repos = ({filteredRepos,onRepoPick,onCancel}) => {
	return ReactDOM.createPortal(
		<div className={styles.root}>
			<div className={styles.container}>
				<header className={styles.header}>
					<h2 className={styles.title}>Pick repo</h2>
					<Button onClick={onCancel}>cancel</Button>
				</header>
				<ul className={styles.list}>
					{filteredRepos.map((repo) => (
						<li className={styles.item} key={repo.id}>
							<button onClick={() => onRepoPick(repo.name)}>
								<p className={styles.repoName}>{repo.full_name}</p> <p>Issues: {repo.open_issues_count}</p>
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>,
		document.getElementById('overlay-root')
	);
};

export default Repos;
