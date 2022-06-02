import Issue from './Issue/Issue';

const Issues = ({ data }) => {
	if (!data) {
		return <div>No issues to display</div>;
	}

	return data.map((issue) => {
		return <Issue key={issue.id} {...issue} />;
	});
};

export default Issues;
