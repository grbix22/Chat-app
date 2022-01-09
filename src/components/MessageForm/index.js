import { useState } from "react";
export default function MessageForm({ onSendMessage }) {
  const [state, setState] = useState({ message: "" });

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
      <input type="text" onChange={setMessage} value={state.message} />
      <button type="submit">Send</button>
    </form>
  );
}
