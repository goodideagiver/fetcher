import Button from '../../../../../components/ui/Button/Button';
import IssueHeader from './IssueHeader';
import ReactDOM from 'react-dom';
import classes from './IssueDetails.module.css';

const Backdrop = ({ onClose }) => (
	<div onClick={onClose} className={classes.backdrop} />
);

const DetailsContainer = ({
	title,
	issueNumber,
	dateCreated,
	description,
	isOpen,
	onClose,
}) => (
	<div className={classes.content}>
		<IssueHeader title={title} issueNumber={issueNumber} />
		<p>Created: {new Date(dateCreated).toLocaleDateString()}</p>
		<div className={classes.actions}>
			<Button>😍 Up</Button>
			<Button>😣 Down</Button>
			<Button onClick={onClose} primary={true}>
				Exit
			</Button>
		</div>
	</div>
);

const IssueDetails = ({ data, onClose }) => {
	return ReactDOM.createPortal(
		<>
			<DetailsContainer onClose={onClose} {...data} />
			<Backdrop onClose={onClose} />
		</>,
		document.getElementById('overlay-root')
	);
};

export default IssueDetails;
