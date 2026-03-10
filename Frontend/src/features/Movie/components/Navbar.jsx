import { Link } from "react-router-dom";
import ThemeToggle from "../../darkLightTheme/pages/ThemeToggle";
import "../styles/navbar.scss";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="navbar">

      {/* LEFT LOGO */}
      <div className="logo">
        <img src="/logo.png" alt="logo" />
      </div>

      {/* MOBILE MENU ICON */}
      <div className="menu-icon" onClick={() => setOpenMenu(!openMenu)}>
        <FaBars />
      </div>

      {/* MENU */}
      <ul className={`nav-links ${openMenu ? "active" : ""}`}>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to="/discover">Discover</Link></li>
        <li>Favorite</li>
        <li>History</li>
      </ul>

      {/* RIGHT SECTION */}
      <div className="nav-right">

        {/* THEME TOGGLE */}
        <ThemeToggle />

        {/* PROFILE */}
        <div className="profile">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
            alt="profile"
          />
          <span>Bharti</span>
        </div>

      </div>

    </nav>
  );
};

export default Navbar;