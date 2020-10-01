class Hello extends React.Component {
	render() {
		let bangs = '!'.repeat(this.props.bangs);
		return (
			<React.Fragment>
				<p>
					Hi {this.props.to} from {this.props.from} {bangs}
				</p>
				<img src={this.props.img} />
			</React.Fragment>
		);
	}
}
