const iterations = 100;

const WelcomeScreen = () => {
	let divs = [];

	for (let i = 0; i < iterations; i++) {
		divs.push(<div key={i}>Another one</div>);
	}

	return <div>{divs}</div>;
};

export default WelcomeScreen;
