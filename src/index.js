import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { createRoot } from 'react-dom/client';

const app = document.getElementById('app');
const root = createRoot(app);
root.render(
	<ChakraProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ChakraProvider>
);
