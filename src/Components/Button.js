import React from "react";
import LanguageContext from "../Contexts/LanguageContext";

const Button = () => {
  return (
    <div>
      <button className="ui button primary">
        <LanguageContext.Consumer>
          {(pipeValue) => (pipeValue === "English" ? "Submit" : "Prasthav")}
        </LanguageContext.Consumer>
      </button>
    </div>
  );
};

export default Button;
