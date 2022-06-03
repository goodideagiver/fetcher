import IssueActions from './components/IssueActions/IssueActions';
import IssueContent from './components/IssueContent/IssueContent';
import IssueHeader from '../IssueHeader';
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
	isPullRequest,
	url,
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
		<IssueActions onClose={onClose} />
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
