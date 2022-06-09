import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import ReactDOM from 'react-dom';
import styles from './Sidebar.module.css';
import { useState } from 'react';
import Links from './Links/Links';
import { CSSTransition } from 'react-transition-group';

const AnimatedSidebar = ({ visible }) => {
	return (
		<CSSTransition
			mountOnEnter
			unmountOnExit
			in={visible}
			timeout={500}
			classNames={{
				enter: styles.sidebarEnter,
				exit: styles.sidebarExit,
			}}
		>
			<div className={styles.sidebar}>
				<Links />
			</div>
		</CSSTransition>
	);
};

const AnimatedSidebarToggleButton = ({ toggleSidebar, visible }) => (
	<CSSTransition
		in={visible}
		timeout={500}
		classNames={{
			enterActive: styles.buttonEnter,
			exit: styles.buttonExit,
		}}
	>
		<button onClick={toggleSidebar} className={styles.button}>
			{visible ? <AiOutlineLeft /> : <AiOutlineRight />}
		</button>
	</CSSTransition>
);

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebarHandler = () => setIsOpen(!isOpen);

	return ReactDOM.createPortal(
		<div className={styles.wrapper}>
			<AnimatedSidebar visible={isOpen} />
			<AnimatedSidebarToggleButton
				visible={isOpen}
				toggleSidebar={toggleSidebarHandler}
			></AnimatedSidebarToggleButton>
		</div>,
		document.getElementById('overlay-root')
	);
};

export default Sidebar;
