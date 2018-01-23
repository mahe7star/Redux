import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import Reducers from './reducers/index';

const store = createStore(Reducers);
const Element=()=> {
	return (
		<Provider store={ store }>
			<App/>
		</Provider>
	);
}

ReactDOM.render(<Element/>, document.getElementById('root'));