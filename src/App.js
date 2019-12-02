import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';

import Form from './components/Form/Form';

function App() {
	return (
		<Provider store={store}>
			<div className="container">
				<Form />
			</div>
		</Provider>
	);
}

export default App;
