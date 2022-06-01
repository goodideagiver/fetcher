import './assets/css/index.css';
import './assets/css/variables.css';

import Layout from './components/Layout/Layout';
import MainNav from './components/MainNav/MainNav';
import PagesViewer from './components/PagesViewer';

const App = () => {
	return (
		<Layout>
			<MainNav />
			<PagesViewer />
		</Layout>
	);
};

export default App;
