export default function Message({ message }) {
  return <div>{message !== null && <div>{message}</div>}</div>;
}
