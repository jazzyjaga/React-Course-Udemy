class App extends React.Component {
	cc;
	render() {
		return (
			<React.Fragment>
				<Hello to="Jagadish" from="Ajazuddin" />
				<Hello to="Shubakar" from="Sai Venkat" />
			</React.Fragment>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
