import "../styles/Input.css";

export default function Dropdown({
    value = "",
    onChange,
    options = [],
    placeholder = "Select..."
}) {
    return (
        <select
            className="dropdown"
            value={value}
            onChange={onChange}
        >
            <option value="" disabled>
                {placeholder}
            </option>

            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}