import ReactMarkdown from 'react-markdown';
import classes from './IssueContent.module.css';

const reactMarkdownComponentConfig = {
	img({ src }) {
		return (
			<a href={src} target='_blank' rel='noreferrer noopener'>
				<img src={src} />
			</a>
		);
	},
};

const IssueMarkdown = ({ description }) => {
	return (
		<div className={classes.md}>
			<ReactMarkdown components={reactMarkdownComponentConfig}>
				{description}
			</ReactMarkdown>
		</div>
	);
};

export default IssueMarkdown;
