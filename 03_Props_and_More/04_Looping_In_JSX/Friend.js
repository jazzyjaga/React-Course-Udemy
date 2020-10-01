class Friend extends React.Component {
	render() {
		let { name, hobbies } = this.props;
		return (
			<React.Fragment>
				<h1>{name}</h1>
				<ul>{hobbies.map((hobby) => <li>{hobby}</li>)}</ul>
			</React.Fragment>
		);
	}
}
