class Hello extends React.Component {
	render() {
		return <h1>Hello React.js</h1>;
	}
}

class HelloMaster extends React.Component {
	render() {
		return <h1>I don't know why I am doing this but still we are doing it. Let's see if this works or not.</h1>;
	}
}

const elementsByClassName = document.querySelectorAll('.testing');
Object.values(elementsByClassName).forEach((element) => {
	ReactDOM.render(<Hello />, element);
});

ReactDOM.render(<HelloMaster />, document.getElementById('root'));
