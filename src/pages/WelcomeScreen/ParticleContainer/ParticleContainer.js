import styles from './ParticleContainer.module.css';

import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticleContainer = () => {
	const particlesInit = async (main) => {
		await loadFull(main);
	};



	return (
		<Particles
			className={styles.root}
			id='tsparticles'
			init={particlesInit}
			options={{
				style: {
					position: 'static',
				},
				background: {
					color: {
						value: '#ffffff',
					},
					opacity: 1,
				},
				fpsLimit: 60,
				particles: {
					color: {
						value: '#000000',
					},
					links: {
						color: '#4c3bae',
						distance: 250,
						enable: true,
						opacity: 0.5,
						width: 2,
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
						speed: 1.5,
						straight: false,
					},
					number: {
						density: {
							enable: true,
							area: 800,
						},
						value: 20,
					},
					opacity: {
						value: 1,
					},
					shape: {
						type: 'circle',
					},
					size: {
						value: { min: 1, max: 25 },
					},
				},
				detectRetina: true,
			}}
		/>
	);
};

export default ParticleContainer;
