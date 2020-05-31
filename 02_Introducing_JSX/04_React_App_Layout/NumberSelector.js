function getNumber() {
	return Math.floor(Math.random() * 10) + 1;
}

class NumberPicker1 extends React.Component {
	render() {
		const number = getNumber();
		return (
			<div>
				<h1>Number selected from the random draw: {number}</h1>
				<h2>{number === 8 ? 'Congratulations' : 'Unlucky! Better luck Next time'}</h2>
				{/* {number === 8 ? (
					<img src="https://i.giphy.com/media/nXxOjZrbnbRxS/giphy.webp" alt="Success giphy" />
				) : null} */}
				{number === 8 && <img src="https://i.giphy.com/media/nXxOjZrbnbRxS/giphy.webp" alt="Success giphy" />}
			</div>
		);
	}
}

// Another approach to do tbis.
class NumberPicker2 extends React.Component {
	render() {
		const number = getNumber();
		let msg;
		if (number === 8) {
			msg = (
				<div>
					<h2>Congratulations</h2>
					<img src="https://i.giphy.com/media/nXxOjZrbnbRxS/giphy.webp" alt="Success giphy" />
				</div>
			);
		} else {
			msg = (
				<div>
					<h2>Unlucky! Better luck next time.</h2>
				</div>
			);
		}
		return (
			<div>
				<h1>Number selected from the random draw: {number}</h1>
				{msg}
			</div>
		);
	}
}
