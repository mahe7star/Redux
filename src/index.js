import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class App extends Component{
	constructor(props){
		super(props);
	}
	
	render(){
		return <h3>React App</h3>;
	}
}


ReactDOM.render(<App />, document.getElementById('root'));