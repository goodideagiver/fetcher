import styles from './MainNav.module.css';
import useMediaQuery from '../../hooks/useMediaQuery';

const MainNav = () => {
	const isMobile = useMediaQuery('(max-width: 768px)');

	const headerContent = !isMobile ? (
		<>
			Fetcher<span>.js</span>
		</>
	) : (
		<>
			F<span>.js</span>
		</>
	);

	return (
		<header className={styles.header}>
			<h1 className={styles.title}>{headerContent}-</h1>
		</header>
	);
};

export default MainNav;
