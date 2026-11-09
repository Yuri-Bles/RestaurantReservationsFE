import "../styles/Button.css";

export default function NavbarButton({ children, onClick, type = "button", disabled = false }) {
    return (
        <button
            className="navbar-button"
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}