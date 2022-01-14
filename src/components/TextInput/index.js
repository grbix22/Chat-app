import "./TextInput.css";
export default function TextInput({ onChange, value, inputProps }) {
  return (
    <input {...inputProps} type="text" onChange={onChange} value={value} />
  );
}
