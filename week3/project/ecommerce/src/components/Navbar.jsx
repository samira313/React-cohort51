import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Products</Link>
      <Link to="/favourites" className="nav-link">Favourites</Link>
    </nav>
  );
}

export default Navbar;
