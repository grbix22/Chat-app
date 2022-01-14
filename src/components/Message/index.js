import React from "react";
import "./message.css";

class Message extends React.Component {
  componentDidMount() {
    this.p.scrollIntoView({
      block: "end",
      behavior: "smooth",
    });
  }
  componentDidUpdate() {
    this.p.scrollIntoView({
      block: "end",
      behavior: "smooth",
    });
  }

  mapMessage(message) {
    const { member, text } = message;
    const { currentMember } = this.props;
    const myMessage = member.id === currentMember.id;
    const className = myMessage ? "currentMember" : "guest";
    return (
      <li className={className}>
        <span
          className="avatar"
          style={{ backgroundColor: member.clientData.color }}
        />
        <div className="Message-content">
          <div className="username" style={{ textTransform: "capitalize" }}>
            {member.clientData.username}
          </div>
          <div className="message">{text}</div>
        </div>
      </li>
    );
  }

  render() {
    const { messageData } = this.props;

    return (
      <ul className="Messages-list">
        {messageData.map((message, index) => (
          <div key={index} style={{ listStyleType: "none" }}>
            {this.mapMessage(message)}
          </div>
        ))}
        <p
          ref={(p) => {
            this.p = p;
          }}
        />
      </ul>
    );
  }
}

export default Message;
