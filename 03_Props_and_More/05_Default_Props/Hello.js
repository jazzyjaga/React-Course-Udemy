class Hello extends React.Component {
	static defaultProps = {
		from: 'Anonymous',
		bangs: 1
	};
	render() {
		let bangs = '!'.repeat(this.props.bangs);
		return (
			<React.Fragment>
				<p>
					Hi {this.props.to} from {this.props.from} {bangs}
				</p>
				{/* <img src={this.props.img} /> */}
			</React.Fragment>
		);
	}
}
