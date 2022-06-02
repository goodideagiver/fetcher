import { Route, Switch } from 'react-router';

import GitHubIssues from '../pages/GitHubIssues/GitHubIssues';
import PageLoadingSpinner from './ui/PageLoadingSpinner/PageLoadingSpinner';
import { Suspense } from 'react';
import WelcomeScreen from '../pages/WelcomeScreen';

const PagesViewer = () => {
	return (
		<Suspense fallback={<PageLoadingSpinner />}>
			<Switch>
				<Route exact path='/' component={WelcomeScreen} />
				<Route exact path='/github' component={GitHubIssues} />
			</Switch>
		</Suspense>
	);
};

export default PagesViewer;
