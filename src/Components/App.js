import React, { Component } from "react";
import LanguageContext from "../Contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";
import UserTransLate from "./UserTransLate";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "English",
    };
  }
  OnFlagSelect = (language) => {
    this.setState({ language: language });
  };

  render() {
    return (
      <div className="ui container">
        <LanguageSelector flagSelect={this.OnFlagSelect} />
        <LanguageContext.Provider value={this.state.language}>
          <UserTransLate />
        </LanguageContext.Provider>
      </div>
    );
  }
}
