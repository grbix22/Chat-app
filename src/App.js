import { useState } from "react";
import "./App.css";
import MessageForm from "./components/MessageForm";
import Message from "./components/Message";

function App() {
  const [messageObjects, setMessageObjects] = useState([]);

  const handleSendMessage = (messageObject) => {
    setMessageObjects([...messageObjects, messageObject]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My chat app</h1>
        {messageObjects.map((messageObject, index) => (
          <Message
            message={messageObject.message}
            member={messageObject.member}
            key={index}
          />
        ))}
        <MessageForm onSendMessage={handleSendMessage} />
      </header>
    </div>
  );
}

export default App;
