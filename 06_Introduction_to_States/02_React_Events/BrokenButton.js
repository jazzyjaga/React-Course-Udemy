class BrokenButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clicked: false
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({ clicked: true });
	}

	// Other approach is to use arrow functions which doesn't require the developer to bind the function in the constructor.
	// handleClick = () => {
	//     this.setState({ clicked: true });
	// }

	render() {
		return (
			<React.Fragment>
				<h1>{this.state.clicked ? 'Clicked' : 'Not Clicked'}</h1>
				<button onClick={this.handleClick}>Click Me</button>
			</React.Fragment>
		);
	}
}
