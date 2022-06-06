import * as classes from './Button.module.css';

import { Link } from 'react-router-dom';

const Button = ({ className, children, to, href, ...props }) => {
	let buttonVariant = '';

	if (props.primary) {
		buttonVariant = classes.buttonPrimary;
	}

	if (props.secondary) {
		buttonVariant = classes.buttonSecondary;
	}

	const buttonClasses = `${classes.base} ${buttonVariant} ${
		className ? className : ''
	} `;

	if (to) {
		return (
			<Link to={to} className={buttonClasses} {...props}>
				{children}
			</Link>
		);
	}

	if (href) {
		return (
			<a href={href} className={buttonClasses} {...props}>
				{children}
			</a>
		);
	}

	return (
		<button className={buttonClasses} {...props}>
			{children}
		</button>
	);
};

export default Button;
