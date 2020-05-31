function getMood() {
	const moods = [ 'Happy', 'Frustrated', 'Angry', 'Joyful' ];
	return moods[Math.floor(Math.random() * moods.length)];
}

class Mood extends React.Component {
	render() {
		return (
			<div>
				<h3>My Mood: {getMood()}</h3>
			</div>
		);
	}
}

ReactDOM.render(<Mood />, document.querySelector('#mood'));
