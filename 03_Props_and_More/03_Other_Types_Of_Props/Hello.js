import React, { Component } from 'react';

class Hello extends Component {
	render() {
		console.log('Props: %s', JSON.stringify(props, null, 4));
		return (
			<React.Fragment>
				<p>
					Hi {this.props.to} from {this.props.from}
				</p>
				<img src={this.props.img} />
			</React.Fragment>
		);
	}
}
