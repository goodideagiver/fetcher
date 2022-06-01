import * as classes from './Button.module.css';

const Button = ({ className, children, ...props }) => {
	return (
		<button
			className={classes.button + ' ' + (className ? className : '')}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
