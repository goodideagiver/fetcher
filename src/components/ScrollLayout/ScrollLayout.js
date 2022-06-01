import styles from './ScrollLayout.module.css';

const ScrollLayout = ({ children }) => {
	return <main className={styles.scroll}>{children}</main>;
};

export default ScrollLayout;
