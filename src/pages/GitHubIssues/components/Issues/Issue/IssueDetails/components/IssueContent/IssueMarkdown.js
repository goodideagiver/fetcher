import ReactMarkdown from 'react-markdown';
import classes from './IssueContent.module.css';

const IssueMarkdown = ({ description }) => {
	return (
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
	);
};

export default IssueMarkdown;
