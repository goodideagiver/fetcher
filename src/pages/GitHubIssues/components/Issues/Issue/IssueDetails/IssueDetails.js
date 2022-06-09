import IssueActions from './components/IssueActions/IssueActions';
import IssueContent from './components/IssueContent/IssueContent';
import IssueHeader from '../IssueHeader';
import ReactDOM from 'react-dom';
import classes from './IssueDetails.module.css';
import { CSSTransition } from 'react-transition-group';

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
	isPullRequest,
	url,
	id,
}) => (
	<div className={classes.content}>
		<IssueHeader
			isPullRequest={isPullRequest}
			title={title}
			issueNumber={issueNumber}
			isOpen={isOpen}
		/>
		<IssueContent
			description={description}
			url={url}
			dateCreated={dateCreated}
		/>
		<IssueActions issueId={id} onClose={onClose} />
	</div>
);

const CSS_TRANSITION_TIMEOUTS = {
	enter: 300,
	exit: 300,
};

const IssueDetails = ({ data, onClose, visible = false }) => {
	return ReactDOM.createPortal(
		<>
			<CSSTransition
				unmountOnExit
				mountOnEnter
				in={visible}
				timeout={CSS_TRANSITION_TIMEOUTS}
				classNames={{
					enter: classes.windowEnter,
					exit: classes.windowExit,
				}}
			>
				<DetailsContainer onClose={onClose} {...data} />
			</CSSTransition>
			<CSSTransition
				unmountOnExit
				mountOnEnter
				in={visible}
				timeout={CSS_TRANSITION_TIMEOUTS}
				classNames={{
					enter: classes.backdropEnter,
					exit: classes.backdropExit,
				}}
			>
				<Backdrop onClose={onClose} />
			</CSSTransition>
		</>,
		document.getElementById('overlay-root')
	);
};

export default IssueDetails;
