import { Redirect, Route, Switch } from 'react-router';

import GitHubIssues from '../pages/GitHubIssues/GitHubIssues';
import PageLoadingSpinner from './ui/PageLoadingSpinner/PageLoadingSpinner';
import { Suspense } from 'react';
import WelcomeScreen from '../pages/WelcomeScreen/WelcomeScreen';
import Covid from '../pages/Covid/Covid';

export const links = [
	{
		name: 'Home',
		url: '/fetcher/',
		component: WelcomeScreen,
	},
	{
		name: 'Github',
		url: '/fetcher/github',
		component: GitHubIssues,
	},
	{
		name: 'Covid',
		url: '/fetcher/covid',
		component: Covid,
	},
];

const PagesViewer = () => {
	return (
		<Suspense fallback={<PageLoadingSpinner />}>
			<Switch>
				<Route exact path='/'>
					<Redirect to='/fetcher/' />
				</Route>
				{links.map((link) => (
					<Route exact key={link.url} path={link.url} component={link.component} />
				))}
			</Switch>
		</Suspense>
	);
};

export default PagesViewer;
