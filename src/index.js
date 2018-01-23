import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import Reducers from './reducers/index';


const Element=()=> {
	return <App/>;
}

ReactDOM.render(
	<Provider store={ createStore(Reducers) }>
		<Element/>
	</Provider>, 
	document.getElementById('root')
);