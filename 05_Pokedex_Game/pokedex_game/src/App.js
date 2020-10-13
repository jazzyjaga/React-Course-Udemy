import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PokedexGame from './PokedexGame';

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<React.Fragment>
				<PokedexGame />
			</React.Fragment>
		);
	}
}

export default App;
