class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Hello />
				<NumberPicker1 />
			</React.Fragment>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
