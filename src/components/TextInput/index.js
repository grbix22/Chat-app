export default function TextInput({ onChange, value, inputProps }) {
  return (
    <div className="TextInput">
      <input {...inputProps} type="text" onChange={onChange} value={value} />
    </div>
  );
}
