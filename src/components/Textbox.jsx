import "../styles/Input.css";

export default function Textbox({
    value,
    onChange,
    placeholder = "",
    type = "text",
    name,
    required = false
}) {
    return (
        <input
            className="textbox"
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
        />
    );
}
