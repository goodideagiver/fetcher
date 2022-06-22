import Covid from '../../pages/Covid/Covid';
import GitHubIssues from '../../pages/GitHubIssues/GitHubIssues';
import WelcomeScreen from '../../pages/WelcomeScreen/WelcomeScreen';

export const links = [
	{
		name: 'Home',
		url: '/fetcher/',
		component: WelcomeScreen,
	},
	{
		name: 'GitHub issues',
		url: '/fetcher/github',
		component: GitHubIssues,
	},
	{
		name: 'Covid (not finished yet)',
		url: '/fetcher/covid',
		component: Covid,
	},
];
