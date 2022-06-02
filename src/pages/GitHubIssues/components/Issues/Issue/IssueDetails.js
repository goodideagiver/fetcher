import Button from '../../../../../components/ui/Button/Button';
import { FiExternalLink } from 'react-icons/fi';
import IssueHeader from './IssueHeader';
import { Link } from '@chakra-ui/react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';
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
	url,
}) => (
	<div className={classes.content}>
		<IssueHeader title={title} issueNumber={issueNumber} isOpen={isOpen} />
		<main className={classes.info}>
			<p>Created: {new Date(dateCreated).toLocaleDateString()}</p>
			<div className={classes.desc}>
				<h3>Detailed issue description: </h3>
				<div className={classes.md}>
					<ReactMarkdown
						components={{
							img({ src }) {
								return (
									<a href={src} target='_blank' rel='noreferrer noopener'>
										<img src={src} />
									</a>
								);
							},
						}}
					>
						{description}
					</ReactMarkdown>
				</div>
			</div>
			<Link isExternal href={url}>
				View on GitHub <FiExternalLink />
			</Link>
		</main>
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
