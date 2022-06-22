import classes from './WelcomeScreen.module.css';

import ParticleContainer from './ParticleContainer/ParticleContainer';
import { links } from '../../assets/js/routes';
import { Link } from 'react-router-dom';

const WelcomeScreenRoutes = () => (
	<ul className={classes.list}>
		{links.map((link, index) => {
			if (index > 0) {
				return (
					<li key={link.name}>
						<Link className={classes.link} to={link.url}>
							{link.name}
						</Link>
					</li>
				);
			}
		})}
	</ul>
);

const WelcomeScreen = () => {
	return (
		<>
			<div className={classes.title}>
				<p>Fetch data from various APIs</p>
				<WelcomeScreenRoutes />
			</div>
			<ParticleContainer />
		</>
	);
};

export default WelcomeScreen;
