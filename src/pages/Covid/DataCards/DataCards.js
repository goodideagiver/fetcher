import Chart from './Cards/Covid/Chart/Chart';
import Covid from './Cards/Covid/Covid';
import styles from './DataCards.module.css';

const DataCards = () => {
	return (
		<ul>
			<li>
				<Chart/>
				<Covid/>
			</li>
		</ul>
	);
};

export default DataCards;
