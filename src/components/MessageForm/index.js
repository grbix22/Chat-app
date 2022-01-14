import React from "react";
import FormButton from "../FormButton";
import TextInput from "../TextInput";
import "./MessageForm.css";

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  setText = (event) => {
    this.setState({ text: event.target.value });
  };

  sendMessage = (event) => {
    event.preventDefault();
    this.setState({ text: "" });
    this.props.handleSendMessage(this.state.text);
  };

  render() {
    return (
      <form className="inputForm" onSubmit={this.sendMessage}>
        <TextInput
          inputProps={{
            name: "text",
            id: "text",
            placeholder: "Type message here",
          }}
          onChange={this.setText}
          value={this.state.text}
        />
        <FormButton type="submit"></FormButton>
      </form>
    );
  }
}

export default MessageForm;
