import styles from './MainNav.module.css';
import useMediaQuery from '../../hooks/useMediaQuery';

const MainNav = () => {
	const isMobile = useMediaQuery('(max-width: 768px)');

	return (
		<header className={styles.header}>
			{!isMobile && (
				<h1 className={styles.title}>
					Fetcher<span>.js</span>
				</h1>
			)}
			{isMobile && (
				<h1 className={styles.title}>
					F<span>.js</span>
				</h1>
			)}
		</header>
	);
};

export default MainNav;
