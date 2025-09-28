import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App_Forms from './Forms/App';
import { Provider } from 'react-redux';
import store from './store/index';

createRoot(document.getElementById('root')).render(
	<Provider store={store}>
			<App_Forms />
	</Provider>
);
