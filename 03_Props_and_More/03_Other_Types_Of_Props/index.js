class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Hello
					to="Jagadish"
					from="Ajazuddin"
					bangs={5}
					img="https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
				/>
			</React.Fragment>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
