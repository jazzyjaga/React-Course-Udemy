class Rando extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			num: 8,
			color: 'orange'
		};
		this.setTimer();
	}

	setTimer() {
		setInterval(() => {
			let newNumber = Math.floor(Math.random() * this.props.maxNum);
			this.setState({ num: newNumber });
		}, 1000);
	}
	render() {
		return <h1>Number: {this.state.num}</h1>;
	}
}
