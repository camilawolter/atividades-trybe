import React from "react";
import PersonalForm from "./PersonalForm";

class Form extends React.Component {
  render() {
    const { changeHandler } = this.props;

    return (
      <form>
        <PersonalForm 
          changeHandler = { changeHandler }
        />
      </form>
    );
  }
}

export default Form;
