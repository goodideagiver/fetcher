import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import ReactDOM from 'react-dom';
import styles from './Sidebar.module.css';
import { useState } from 'react';
import Links from './Links/Links';

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => setIsOpen(!isOpen);

	return ReactDOM.createPortal(
		<div className={styles.wrapper}>
			{isOpen && (
				<div className={styles.sidebar}>
					<Links/>
				</div>
			)}
			<button onClick={toggleSidebar} className={styles.button}>
				{isOpen ? <AiOutlineLeft /> : <AiOutlineRight />}
			</button>
		</div>,
		document.getElementById('overlay-root')
	);
};

export default Sidebar;
