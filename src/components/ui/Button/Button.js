import * as classes from './Button.module.css';

const Button = ({ className, children, ...props }) => {
	return (
		<Button className={classes.button + ' ' + (className ? className : '')}>
			siema
		</Button>
	);
};

export default Button;
