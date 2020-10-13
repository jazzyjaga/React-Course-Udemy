class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<BrokenButton />
			</React.Fragment>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
