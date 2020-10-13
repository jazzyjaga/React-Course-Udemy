import React, { Component } from 'react';
import PokedexDeck from './PokedexDeck';

export default class PokedexGame extends Component {
	static defaultProps = {
		pokemonData: [
			{ id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
			{ id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
			{ id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
			{ id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
			{ id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
			{ id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
			{ id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
			{ id: 143, name: 'Eevee', type: 'normal', base_experience: 65 }
		]
	};

	constructor(props) {
		super(props);
	}

	shuffleArray() {
		for (let index = 0; index < this.props.pokemonData.length; index++) {
			let random_index = Math.floor(Math.random() * this.props.pokemonData.length);
			[ this.props.pokemonData[index], this.props.pokemonData[random_index] ] = [
				this.props.pokemonData[random_index],
				this.props.pokemonData[index]
			];
		}
	}

	getSum(array) {
		return array.reduce((accumulator, currentValue) => accumulator + currentValue['base_experience'], 0);
	}

	checkWin(myDeck, opponentDeck) {
		return this.getSum(myDeck) > this.getSum(opponentDeck);
	}

	render() {
		this.shuffleArray();
		const firstPlayerDeck = this.props.pokemonData.slice(0, 4);
		const secondPlayerDeck = this.props.pokemonData.slice(4);
		const isFirstPlayerWinner = this.checkWin(firstPlayerDeck, secondPlayerDeck);
		return (
			<React.Fragment>
				<PokedexDeck
					pokemonData={firstPlayerDeck}
					isWinner={isFirstPlayerWinner}
					totalExperience={this.getSum(firstPlayerDeck)}
				/>
				<PokedexDeck
					pokemonData={secondPlayerDeck}
					isWinner={!isFirstPlayerWinner}
					totalExperience={this.getSum(secondPlayerDeck)}
				/>
			</React.Fragment>
		);
	}
}
