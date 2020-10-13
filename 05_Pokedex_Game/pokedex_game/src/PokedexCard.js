import React, { Component } from 'react';
import './PokedexCard.css';

export default class PokedexCard extends Component {
	constructor(props) {
		super(props);
	}

	getImageUrl(id) {
		return 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/' + this.getNumberInStringFormat(id) + '.png';
	}

	getNumberInStringFormat(num) {
		return '0'.repeat(3 - num.toString().length) + num.toString();
	}

	render() {
		return (
			<div className="PokedexCard">
				<h1>{this.props.pokeCard.name}</h1>
				<img src={this.getImageUrl(this.props.pokeCard.id)} />
				<div>Type: {this.props.pokeCard.type}</div>
				<div>Experience: {this.props.pokeCard['base_experience']}</div>
			</div>
		);
	}
}
