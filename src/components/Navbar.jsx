import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import logo from '../assets/LogoTransparent.png';
import NavbarButton from "../components/NavbarButton.jsx";

function Navbar() {
    return (
      <nav className="navbar">
        <Link to="/">
          <img src={logo} alt="Restaurant_Logo" />
        </Link>
        <Link to={"/"}>
            <NavbarButton>
                Home
            </NavbarButton>
        </Link> |
        <Link to={"/TableOverview"}>
            <NavbarButton>
                Table Overview
            </NavbarButton>
        </Link> |
        <Link to={"/Reservation"}>
            <NavbarButton>
                Make Reservation
            </NavbarButton>
        </Link>
      </nav>
    );
}

export default Navbar;