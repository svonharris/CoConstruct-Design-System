import { useState } from "react";
import style from "./NavBar.module.css";
import Button from "../Button/Button";
import logo from "../../assets/BT_CoConstruct_Logos_Color_Stacked.png";

type NavLink = {
  label: string;
  href: string;
};

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={style.navbar}>
      <div className={style.navContainer}>
        {/* Logo */}
        <div className={style.navLogo}>
          <img
            src={logo}
            alt="CoConstruct | Construction Management Software"
            className={style.logo}
          />
        </div>

        {/* Hamburger Menu */}
        <button
          className={`${style.hamburger} ${isMenuOpen ? style.active : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Links */}
        <div
          className={`${style.navMenu} ${isMenuOpen ? style.active : ""}`}
          onClick={closeMenu}
        >
          <div className={style.navLinks}>
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className={style.navLink}>
                {link.label}
              </a>
            ))}
          </div>

          {/* Button */}
          <Button
            onClick={() => console.log("Sign up clicked")}
            ariaLabel="Sign up"
            variant="primary"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
