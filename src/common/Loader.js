import React, { Component } from "react";

class Loader extends Component {
	render() {
		return (
			<div className="lds-loader-container">
				<div className="lds-ellipsis">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		);
	}
}

export default Loader;
