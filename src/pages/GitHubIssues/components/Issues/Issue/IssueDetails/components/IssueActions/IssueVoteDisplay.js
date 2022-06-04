const MAX_DISPLAYED_AMOUNT = 30;
const LOWEST_DISPLAY_AMOUNT = -30;

const IssueVoteDisplay = ({ voteCount }) => {
	let displayedVote = 0;
  
	if (+voteCount) {
		displayedVote = voteCount;

		if (+voteCount > MAX_DISPLAYED_AMOUNT) {
			displayedVote = `${MAX_DISPLAYED_AMOUNT} and more`;
		} else if (+voteCount < LOWEST_DISPLAY_AMOUNT) {
			displayedVote = `${LOWEST_DISPLAY_AMOUNT} and less`;
		}
	}

	return <p>Votes: {displayedVote}</p>;
};

export default IssueVoteDisplay;
