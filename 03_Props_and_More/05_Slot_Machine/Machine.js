class Hello extends React.Component {
	render() {
		const { string1, string2, string3 } = this.props;
		const isWinner = string1 === string2 && string1 === string3;
		return (
			<React.Fragment>
				<p>
					{string1} {string2} {string3}
				</p>
				<p>{isWinner ? 'Yayyy You win :)' : 'Oops You Lose :('}</p>
			</React.Fragment>
		);
	}
}
