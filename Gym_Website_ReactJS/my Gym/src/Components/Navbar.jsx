import { useState } from "react";
import logo from "../images/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setnav] = useState(false);

  const ChangeBackground = () => {
    if (window.scrollY >= 50) {
      setnav(true);
    } else {
      setnav(false);
    }
  };

  window.addEventListener("scroll", ChangeBackground);
  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to="#" className="logo">
        <img src={logo} />
      </Link>
    </nav>
  );
};

export default Navbar;
