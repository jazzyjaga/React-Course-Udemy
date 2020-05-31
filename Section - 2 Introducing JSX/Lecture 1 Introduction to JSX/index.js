class Hello extends React.Component {
	render() {
		return (
			<div>
				<h1>My Image</h1>
				<img
					src="https://images.unsplash.com/photo-1590664216212-62e763768cae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
					alt="Some random image from Unsplash"
				/>
			</div>
		);
	}
}

ReactDOM.render(<Hello />, document.getElementById('root'));
