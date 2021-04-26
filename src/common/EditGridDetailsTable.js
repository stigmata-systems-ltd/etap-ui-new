import React, { Component } from "react";
import Button from "./forms/Button";

class EditGridDetailsTable extends Component {
	renderTableHeaders = () => {
		return this.props.metaData.map((header) => <th>{header}</th>);
	};

	render() {
		return (
			<div className="table-responsive pt-3 data-table">
				<table className="table table-bordered table-striped">
					<thead>
						<tr>{this.renderTableHeaders()}</tr>
					</thead>
					<tbody>
						{this.props.bodyData.map((data) => {
							return (
								<tr>
									{Object.keys(data).map((key) => (
										<>
											<td> {data[key]}</td>
										</>
									))}
									<td className="action-btns">
										<Button
											btnText="Save"
											btnType="btn-secondary"
											onClick={this.props.onClick}
										/>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}
}

export default EditGridDetailsTable;
