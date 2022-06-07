import styles from './DataCard.module.css';

const DataCard = ({ children, title, dataSource }) => {
	return (
		<div className={styles.root}>
			{title && <p>{title}</p>}
			<p>Data source: {dataSource}</p>
			<div>{children}</div>
		</div>
	);
};

export default DataCard;
