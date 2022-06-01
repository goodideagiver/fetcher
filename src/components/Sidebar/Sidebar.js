import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import styles from './Sidebar.module.css';
import { useState } from 'react';

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => setIsOpen(!isOpen);

	return (
		<div className={styles.wrapper}>
			{isOpen && <div className={styles.sidebar}>Sidebar</div>}
			<button onClick={toggleSidebar} className={styles.button}>
				{isOpen ? <AiOutlineLeft /> : <AiOutlineRight />}
			</button>
		</div>
	);
};

export default Sidebar;
