import React from "react";
import "./App.css";
import MessageForm from "./components/MessageForm";
import Message from "./components/Message";
import randomName from "./components/random/getRandomName";
import randomColor from "./components/random/getRandomColor";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: {
        username: randomName(),
        color: randomColor(),
      },
      messageData: [],
    };
  }

  componentDidMount() {
    this.drone = new window.Scaledrone("2fZ5aIaEHd4hPIIN", {
      data: this.state.userData,
    });
    this.drone.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
      const userData = { ...this.state.userData };
      userData.id = this.drone.clientId;
      this.setState({ userData });
    });
    const room = this.drone.subscribe("observable-chatroom");
    room.on("data", (text, member) => {
      const message = this.state.messageData;
      message.push({ text, member });
      this.setState({ message });
    });
  }

  componentWillUnmount() {
    this.drone.on("close", (event) => {
      this.drone.close();
    });
  }

  handleSendMessage = (message) => {
    this.drone.publish({
      room: "observable-chatroom",
      message,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>My chat app</h1>
          <div className="activeUser">
            My random username:{" "}
            <span
              className="avatar"
              style={{ backgroundColor: this.state.userData.color }}
            />
            <span
              style={{
                textTransform: "capitalize",
              }}
            >
              {this.state.userData.username}
            </span>
          </div>
        </div>
        <div className="App-body">
          <Message
            messageData={this.state.messageData}
            currentMember={this.state.userData}
          />
        </div>
        <div className="App-footer">
          <MessageForm handleSendMessage={this.handleSendMessage} />
        </div>
      </div>
    );
  }
}

export default App;
