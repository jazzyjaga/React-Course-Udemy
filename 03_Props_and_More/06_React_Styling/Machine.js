class Hello extends React.Component {
	render() {
		const { string1, string2, string3 } = this.props;
		const isWinner = string1 === string2 && string1 === string3;
		const colors = { backgroundColor: 'purple', fontSize: '1.3em' };
		return (
			<div className="Machine">
				<p style={colors}>
					{string1} {string2} {string3}
				</p>
				<p className={isWinner ? 'win' : 'lose'}>{isWinner ? 'Yayyy You win :)' : 'Oops You Lose :('}</p>
			</div>
		);
	}
}
