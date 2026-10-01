import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import logo from '../assets/LogoTransparent.png';

function Navbar() {
    return (
      <nav className="navbar">
        <Link to="/">
          <img src={logo} alt="Restaurant_Logo" />
        </Link>
        <Link to="/">Home</Link> |{" "}
        <Link to="/TableOverview">Table Overview</Link>{" "}
      </nav>
    );
}

export default Navbar;