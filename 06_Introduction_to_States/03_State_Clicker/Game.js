class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 9,
			gameOver: false
		};
	}

	handleClick = () => {
		let newValue = Math.floor(Math.random() * 10);
		let newGameOverState = newValue === this.props.winningValue;
		this.setState({ value: newValue, gameOver: newGameOverState });
	};

	render() {
		return (
			<center>
				<h1>value: {this.state.value}</h1>
				{!this.state.gameOver ? <button onClick={this.handleClick}>Random Number</button> : <h1>Game Over</h1>}
			</center>
		);
	}
}
