class Button extends React.Component {
	render() {
		return (
			<React.Fragment>
				<button
					onClick={() => {
						alert('Clicked');
					}}
				>
					Click Me
				</button>
			</React.Fragment>
		);
	}
}
