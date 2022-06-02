import Issue from './Issue/Issue';

const Issues = ({ issuesList }) => {
	if (!issuesList) {
		return <div>No issues to display</div>;
	}

	return issuesList.map((issue) => {
		return <Issue key={issue.id} {...issue} />;
	});
};

export default Issues;
