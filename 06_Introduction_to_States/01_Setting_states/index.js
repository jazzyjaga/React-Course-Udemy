class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Rando maxNum={8} />
			</React.Fragment>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
