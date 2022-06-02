import { FiExternalLink } from 'react-icons/fi';
import { Link } from '@chakra-ui/react';
import classes from './IssueLink.module.css';

const IssueLink = ({ url }) => {
	return (
		<Link className={classes.link} isExternal href={url}>
			View on GitHub <FiExternalLink />
		</Link>
	);
};

export default IssueLink;
