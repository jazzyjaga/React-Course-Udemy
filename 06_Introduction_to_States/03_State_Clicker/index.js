class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Game winningValue={8} />
			</React.Fragment>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
