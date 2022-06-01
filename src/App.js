import './assets/css/index.css';

import Button from './components/ui/Button/Button';

const App = () => {
	return (
		<div>
			<button>Siema z buttona</button>
			<Button primary>Important button</Button>
			<Button>Normal button</Button>
			<Button secondary>Not important button</Button>
		</div>
	);
};

export default App;
