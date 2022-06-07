import { Link } from 'react-router-dom';
import { links } from '../../PagesViewer';
import styles from './Links.module.css';

const Links = () => {
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
