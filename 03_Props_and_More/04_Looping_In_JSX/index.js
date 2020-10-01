class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Friend name="John Wick" hobbies={[ 'Killing', 'Fighting', 'Grieving' ]} />
				<Friend name="Dominic Toretto" hobbies={[ 'Racing', 'Spending time with Family' ]} />
			</React.Fragment>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
