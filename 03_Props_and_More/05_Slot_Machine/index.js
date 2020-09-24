class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<h1>Slot Machine</h1>
				<Hello string1="x" string2="y" string3="z" />
				<Hello string1="8" string2="8" string3="8" />
				<Hello string1="x" string2="y" string3="z" />
			</React.Fragment>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
