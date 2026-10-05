import "../styles/Button.css";

export default function PrimaryButton({ children, onClick, type = "button", disabled = false }) {
    return (
        <button
            className="primary-button"
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}