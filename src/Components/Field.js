import React from "react";
import LanguageContext from "../Contexts/LanguageContext";

class Field extends React.Component {
  render() {
    const renderLabel = (labelValue) => {
      return labelValue === "English" ? "Name" : "Naam";
    };
    return (
      <div className="ui field">
        <LanguageContext.Consumer>
          {(labelValue) => renderLabel(labelValue)}
        </LanguageContext.Consumer>

        <input />
      </div>
    );
  }
}

export default Field;
