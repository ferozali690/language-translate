import React, { Component } from "react";

export default class LanguageSelector extends Component {
  render() {
    return (
      <div>
        <div>
          <i
            className="flag in"
            onClick={() => this.props.flagSelect("India")}
          ></i>
          <i
            className="flag us"
            onClick={() => this.props.flagSelect("English")}
          ></i>
        </div>
      </div>
    );
  }
}
