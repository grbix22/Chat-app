import "./message.css";
export default function Message({ message, member }) {
  if (message === "" || message == null) {
    return null;
  }

  return (
    <li>
      <span className="avatar" style={{ backgroundColor: member.color }} />
      <div className="Message-Content">
        <div className="username">{member.username}</div>
        <div className="message">{message}</div>
      </div>
    </li>
  );
}
