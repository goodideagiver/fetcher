import DisplayError from './components/DisplayError/DisplayError';
import InfiniteScroll from 'react-infinite-scroll-component';
import IssueForm from './components/IssueForm';
import Issues from './components/Issues/Issues';
import PageLoadingSpinner from '../../components/ui/PageLoadingSpinner/PageLoadingSpinner';
import classes from './GitHubIssues.module.css';
import useFetchIssues from './useFetchIssues';
import { useLocalStorage } from './useLocalStorage';

const GitHubIssues = () => {
	useLocalStorage(); //loads saved liked issues from local storage

	const {
		error,
		getMoreIssues,
		isLoading,
		formattedIssues,
		issuesData,
		hasMoreIssues,
	} = useFetchIssues();

	const scrollComponentCss = hasMoreIssues ? classes.scrollComponent : '';

	return (
		<div className={classes['issues-wrapper']}>
			<header>
				<IssueForm
					isDataPresent={!!formattedIssues && !!formattedIssues.length}
				/>
			</header>
			{error && <DisplayError errorMessage={error} />}
			{formattedIssues && !error && issuesData && issuesData.length ? (
				<div id='scrollContainer' className={classes['scrollable-container']}>
					<InfiniteScroll
						className={scrollComponentCss}
						dataLength={issuesData.length}
						next={getMoreIssues}
						hasMore={hasMoreIssues}
						scrollableTarget='scrollContainer'
					>
						<Issues issuesList={formattedIssues} />
					</InfiniteScroll>
					{isLoading && <PageLoadingSpinner />}
				</div>
			) : (
				<DisplayError errorMessage='No issues found' />
			)}
		</div>
	);
};

export default GitHubIssues;
