import { Link } from 'react-router-dom';
import styles from './Links.module.css';
import { links } from '../../../assets/js/routes';

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
