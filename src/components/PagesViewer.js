import { Redirect, Route, Switch } from 'react-router';

import GitHubIssues from '../pages/GitHubIssues/GitHubIssues';
import PageLoadingSpinner from './ui/PageLoadingSpinner/PageLoadingSpinner';
import { Suspense } from 'react';
import WelcomeScreen from '../pages/WelcomeScreen/WelcomeScreen';

const PagesViewer = () => {
	return (
		<Suspense fallback={<PageLoadingSpinner />}>
			<Switch>
				<Route exact path='/'>
					<Redirect to='/fetcher/' />
				</Route>
				<Route exact path='/fetcher/' component={WelcomeScreen} />
				<Route exact path='/fetcher/github' component={GitHubIssues} />
			</Switch>
		</Suspense>
	);
};

export default PagesViewer;
