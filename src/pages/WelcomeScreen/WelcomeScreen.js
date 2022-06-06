import classes from './WelcomeScreen.module.css'

import ParticleContainer from './ParticleContainer/ParticleContainer';

const WelcomeScreen = () => {
	return (
		<>
			<p className={classes.title}>Fetch data from various APIs</p>
			<ParticleContainer />
		</>
	);
};

export default WelcomeScreen;
