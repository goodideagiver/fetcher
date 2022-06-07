import { Link } from 'react-router-dom';
import styles from './Links.module.css';

const Links = () => {
	const links = [
		{
			name: 'Home',
			url: '/fetcher/',
		},
		{
			name: 'Github',
			url: '/fetcher/github',
		},
	];

	return (
		<ul className={styles.root}>
			{links.map((link) => (
				<li key={link.name}>
					<Link to={link.url}>{link.name}</Link>
				</li>
			))}
		</ul>
	);
};

export default Links;