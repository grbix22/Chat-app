import { useState } from "react";
import FormButton from "../FormButton";
import TextInput from "../TextInput";
import randomName from "../random/getRandomName";
import randomColor from "../random/getRandomColor";

export default function MessageForm({ onSendMessage }) {
  const [state, setState] = useState({
    message: [],
    member: { username: randomName(), color: randomColor() },
  });

  const setMessage = (event) => {
    setState((currentState) => {
      return { ...currentState, message: event.target.value };
    });
  };

  const sendMessage = (event) => {
    event.preventDefault();
    onSendMessage(state);
  };

  return (
    <form onSubmit={sendMessage}>
      <TextInput
        inputProps={{
          name: "message",
          id: "message",
          placeholder: "Type message here",
        }}
        onChange={setMessage}
        value={state.message}
      />
      <FormButton type="submit">Send</FormButton>
    </form>
  );
}
