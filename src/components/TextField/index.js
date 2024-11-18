import "./TextField.css";

const TextField = (props) => {
  const modifiedPlaceholder = `${props.placeholder}...`;

  const onTyped = (event) => {
    props.onChanged(event.target.value);
  };

  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={onTyped}
        required={props.required}
        placeholder={modifiedPlaceholder}
      />
    </div>
  );
};

export default TextField;
