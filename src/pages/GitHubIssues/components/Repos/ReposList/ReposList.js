import styles from './ReposList.module.css';

const ReposList = ({ filteredRepos, onRepoPick }) => {
	if (!filteredRepos || !filteredRepos.length) {
		return <p>No repos to show</p>;
	}

	return (
		<ul className={styles.list}>
			{filteredRepos.map((repo) => (
				<li className={styles.item} key={repo.id}>
					<button onClick={() => onRepoPick(repo.name)}>
						<p className={styles.repoName}>{repo.name}</p>{' '}
						<p className={styles.issueCount}>
							<span>Issues: </span>
							<span>{repo.open_issues_count}</span>
						</p>
					</button>
				</li>
			))}
		</ul>
	);
};

export default ReposList;
