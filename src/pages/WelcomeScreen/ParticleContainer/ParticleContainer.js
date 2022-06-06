import styles from './ParticleContainer.module.css';

import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticleContainer = () => {
		const particlesInit = async (main) => {
			await loadFull(main);
		};

		const particlesLoaded = (container) => {
			console.log(container);
		};

	return (
		<>
			<Particles className={styles.root}
				id='tsparticles'
				init={particlesInit}
				loaded={particlesLoaded}
				options={{
					style: {
						position: 'static',
					},
					background: {
						color: {
							value: '#ffffff',
						},
						opacity: 0.5,
					},
					fpsLimit: 15,
					particles: {
						color: {
							value: '#7e7e7e',
						},
						links: {
							color: '#7e7e7e',
							distance: 150,
							enable: true,
							opacity: 0.1,
							width: 1,
						},
						collisions: {
							enable: true,
						},
						move: {
							direction: 'none',
							enable: true,
							outModes: {
								default: 'bounce',
							},
							random: false,
							speed: 0.2,
							straight: false,
						},
						number: {
							density: {
								enable: true,
								area: 800,
							},
							value: 80,
						},
						opacity: {
							value: 0.5,
						},
						shape: {
							type: 'circle',
						},
						size: {
							value: { min: 1, max: 5 },
						},
					},
					detectRetina: true,
				}}
			/>
		</>
	);
};

export default ParticleContainer;
