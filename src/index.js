import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { store } from './store/store';

const app = document.getElementById('app');
const root = createRoot(app);
root.render(
	<Provider store={store}>
		<ChakraProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ChakraProvider>
	</Provider>
);
