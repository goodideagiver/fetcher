import { Redirect, Route, Switch } from 'react-router';

import PageLoadingSpinner from './ui/PageLoadingSpinner/PageLoadingSpinner';
import { Suspense } from 'react';
import { links } from '../assets/js/routes';

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
