import React, { Component } from "react";
import FaIcon from "../FaIcon";
import Col6 from "./Col6";
class TextInput extends Component {
  render() {
    let input;

    if (this.props.disabled) {
      input = (
        <input
          type="text"
          name={this.props.name}
          id={this.props.id}
          value={this.props.value}
          class="form-control"
          onChange={(e) => this.props.onChange(e)}
          placeholder={this.props.placeholder ? this.props.placeholder : ""}
          disabled
        />
      );
    } else {
      input = (
        <input
          type="text"
          name={this.props.name}
          id={this.props.id}
          value={this.props.value}
          class="form-control"
          onChange={(e) => this.props.onChange(e)}
          placeholder={this.props.placeholder ? this.props.placeholder : ""}
        />
      );
    }
    return (
      <Col6 size={this.props.size}>
        <div class="form-group row">
          {this.props.label && (
            <label
              class={`${
                this.props.labelSize ? this.props.labelSize : "col-sm-3"
              } col-form-label`}
            >
              {this.props.label}
            </label>
          )}
          <div
            class={`${
              this.props.fieldSize ? this.props.fieldSize : "col-sm-9"
            }`}
          >
            {input}
          </div>
          {this.props.iconSize && (
            <div class={this.props.iconSize ? this.props.iconSize : "col-sm-3"}>
              <span
                onClick={this.props.onClick}
                className="d-flex align-items-center justify-content-center"
                style={{ cursor: "pointer" }}
              >
                <FaIcon
                  iconname={this.props.iconname}
                  className={this.props.iconClass}
                  size={this.props.size}
                  color={this.props.iconColor}
                />
              </span>
            </div>
          )}
        </div>
      </Col6>
    );
  }
}

export default TextInput;
