class App extends React.Component {
	render() {
		return (
			<Hello
				from="Jagadish"
				to="Shubakar"
				img="https://unsplash.com/photos/5JcdQfzR_YA"
				num={3}
				arr={[ 1, 2, 3, 4, 5 ]}
				dict={{ 1: 2, 3: 4, 5: 6, RVR: 'JC' }}
			/>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
