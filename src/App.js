import './assets/css/index.css';
import './assets/css/variables.css';

import Layout from './components/Layout/Layout';
import MainNav from './components/MainNav/MainNav';
import PagesViewer from './components/PagesViewer';
import ScrollLayout from './components/ScrollLayout/ScrollLayout';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
	return (
		<>
			<Sidebar />
			<Layout>
				<MainNav />
				<ScrollLayout>
					<PagesViewer />
				</ScrollLayout>
			</Layout>
		</>
	);
};

export default App;
