import React, { Component } from 'react';
import PokedexCard from './PokedexCard';
import './PokedexDeck.css';

export default class PokedexDeck extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<React.Fragment>
				<div className="Border">
					<center className={this.props.isWinner ? 'winner' : 'loser'}>
						<h2>{this.props.isWinner ? 'Winning Hand' : 'Losing Hand'}</h2>
						<h3>Total Experience: {this.props.totalExperience}</h3>
					</center>
					<div className="PokedexDeck">
						{this.props.pokemonData.map((item) => <PokedexCard pokeCard={item} />)}
					</div>
				</div>
			</React.Fragment>
		);
	}
}
